import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import uniqid from 'uniqid';

export async function POST(req: NextRequest) {
    try {
        const data = await req.formData();

        if (data.has('file')) {
            const file = data.get('file');

            if (file && file instanceof Blob) {
                const s3client = new S3Client({
                    region: 'ap-south-1',
                    credentials: {
                        accessKeyId: process.env.S3_ACCESS_KEY as string,
                        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
                    }
                });

                const randomId = uniqid();
                const ext = file.name.split('.').pop();
                const fileName = `${randomId}.${ext}`;
                const bucketName = process.env.BUCKET;

                const chunks: Uint8Array[] = [];
                const stream = file.stream();
                const reader = stream.getReader();

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    chunks.push(value);
                }

                const body = Buffer.concat(chunks);

                await s3client.send(new PutObjectCommand({
                    Bucket: bucketName,
                    Key: fileName,
                    ACL: 'public-read',
                    Body: body,
                    ContentType: file.type,
                }));

                const link = `https://${bucketName}.s3.amazonaws.com/${fileName}`;
                return NextResponse.json({ link });
            } else {
                return NextResponse.json({ message: "Invalid file" }, { status: 400 });
            }
        } else {
            return NextResponse.json({ message: "No file provided" }, { status: 400 });
        }
    } catch (error) {
        console.error("Error uploading file:", error);
        return NextResponse.json({ message: "Error uploading file" }, { status: 500 });
    }
}

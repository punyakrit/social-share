import connectMongoDb from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Icons from "lucide-react";

type ButtonKey = "home" | "settings";

async function page({ params }: any) {
  const uri = params.profile;
  await connectMongoDb();
  const page = await UserPage.findOne({
    uri: uri,
  });

  if (!page) {
    return <div>Page not found</div>;
  }

  function buttonLink(key: string, value: string) {
    if (key === "mobile") {
      return "tel:" + value;
    }
    if (key === "email") {
      return "mailto:" + value;
    }
    return value;
  }

  const buttonsIcons = {
    home: Icons.Home,
    settings: Icons.Settings,
    email: Icons.Mail,
    mobile: Icons.Phone,
    instagram: Icons.Instagram,
    facebook: Icons.Facebook,
    whatsapp: Icons.MessageCircle,
    github: Icons.Github,
    website: Icons.Link,
  };

  return (
    <div className="bg-gray-900">
      <div className="flex justify-center h-screen sm:py-3">
        <div
          className="sm:w-[43%] md:w-1/2 lg:w-1/3 rounded-t-3xl rounded-3xl"
          style={{ backgroundColor: page.bgColor }}
        >
          <div
            className="h-52 bg-gray-400 bg-cover bg-center rounded-t-3xl"
            style={{ backgroundImage: `url(${page.bgImage})` }}
          ></div>
          <div className="text-white bg-gray-950 backdrop-blur-md mb-5 space-y-2 flex justify-center flex-col py-3">
            <div className="flex justify-center -mt-16">
              <Image
                src={page.avatarImage}
                alt=""
                width={140}
                height={140}
                className="rounded-full border-4"
              ></Image>
            </div>
            <div className="text-2xl text-center px-4">{page.displayName}</div>
            <div className="text-md font-light justify-center flex items-center px-4">
              <MapPin className="mr-2" />
              {page.location}
            </div>
            <div className="text-md font-light text-center px-4">
              {page.bio}
            </div>
          </div>
          <div className="flex justify-center space-y-2 flex-col px-5">
            {page.button &&
              Object.keys(page.button).map((buttonKey) => {
                const key = buttonKey as ButtonKey;
                const IconComponent = buttonsIcons[key];
                return (
                  <Link
                    key={buttonKey}
                    target="_blank"
                    href={buttonLink(buttonKey, page.button[buttonKey])}
                    className="rounded-2xl w-full bg-gray-950/90 flex items-center justify-between text-white p-3"
                  >
                    <div className="flex items-center">
                      <IconComponent className="ml-4" />
                      <span className="ml-4">{page.button[buttonKey]}</span>
                    </div>
                    <div className="flex justify-end mr-4">
                      <Icons.Send />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

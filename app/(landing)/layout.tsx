import { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
// import classNames from "classNames";
import "../globals.css";
import Appbar from "@/components/Appbar";
import FooterApp from "@/components/FooterApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShareHub",
  description: "Create your own public viewable profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4LFH8B1P2D"
        ></script>
        <script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4LFH8B1P2D');`}
        </script>
      </Head>
      <body className="inter.className, bg-gray-900">
        <Appbar />
        <div>{children}</div>
        <FooterApp />
      </body>
    </html>
  );
}

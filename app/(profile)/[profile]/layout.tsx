import { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import classNames from "classnames";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShareHub Profile View",
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
      <body className={classNames(inter.className, 'bg-gray-900')}>
        <div>{children}</div>
      </body>
    </html>
  );
}

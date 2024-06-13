import React from 'react'
import DashboardSectionComponent from '../dashboard/DashboardSectionComponent'
import UserProfileView from '@/app/(profile)/[profile]/page'
import * as Icons from "lucide-react";
import connectMongoDb from '@/lib/dbConnect';
import { UserPage } from '@/models/Onboarding';
import Image from 'next/image';
import Link from 'next/link';

async function ProfilePreview({user}:any) {

  type ButtonKey = "home" | "settings";

  const uri = user.uri
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
      <DashboardSectionComponent>
        <div
          className="h-full rounded-t-3xl  rounded-3xl"
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
              <Icons.MapPin className="mr-2" />
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

          <div className="max-w-2xl mx-auto space-y-2 gap-6 p-4 px-8 text-white">
            {/* @ts-ignore */}
            {page.links.map((l) => (
              <Link
                key={l.url}
                target="_blank"
                ping={`${process.env.URL}api/click?url=${btoa(l.url)}&page=${
                  page.uri
                }`}
                className="bg-gray-950/90 rounded-3xl p-2 flex items-center"
                href={l.url}
              >
                <div className="relative overflow-hidden w-16">
                  <div className="w-16 h-16 relative flex items-center justify-center aspect-square">
                    {l.icon ? (
                      <Image
                        className="w-full h-full object-cover bg-gray-950 rounded-full border"
                        src={l.icon}
                        alt="icon"
                        width={64}
                        height={64}
                      />
                    ) : (
                      <Icons.Link2 className="w-8 h-8" />
                    )}
                  </div>
                </div>
                <div className="flex flex-grow items-center ml-4">
                  <div>
                    <h3>{l.title}</h3>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-auto mr-6">
                  <Icons.Send />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </DashboardSectionComponent>
  )
}

export default ProfilePreview

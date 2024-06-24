"use client";
import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import DashboardSectionComponent from "./DashboardSectionComponent";
import {
  Facebook,
  Github,
  GripVertical,
  Instagram,
  Link,
  Loader2,
  Mail,
  Phone,
  Plus,
} from "lucide-react";
import { FaDiscord, FaTrash, FaWhatsapp } from "react-icons/fa";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { saveSocials } from "@/actions/UserProfile";
import { useToast } from "../ui/use-toast";

const allButtons = [
  {
    key: "email",
    label: "E-Mail",
    icon: <Mail />,
    placeholder: "JohnDoe@sharehub.xyz",
  },
  {
    key: "mobile",
    label: "Mobile",
    icon: <Phone />,
    placeholder: "+91 - 9900990099",
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: <Instagram />,
    placeholder: "https://www.instagram.com/sharehub.xyz/",
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: <Facebook />,
    placeholder: "https://www.facebook.com/sharehub",
  },
  {
    key: "whatsapp",
    label: "Whatsapp",
    icon: <FaWhatsapp className="text-2xl" />,
    placeholder: "+91 - 9900990099",
  },
  {
    key: "github",
    label: "Github",
    icon: <Github />,
    placeholder: "https://github.com/sharehub",
  },
  {
    key: "website",
    label: "Website",
    icon: <Link />,
    placeholder: "https://www.sharehub.xyz",
  },
];

function UserSocialForm({ user, session }: any) {
  const pageSavedButton = user.button ? Object.keys(user.button) : [];
  const buttonInfo = pageSavedButton
    .map((k) => allButtons.find((b) => b.key === k))
    .filter(Boolean); // Ensure no undefined values are included

  const [activeButtons, setActiveButtons] = useState<any[]>(buttonInfo);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const availableButtons = allButtons.filter(
    (button) =>
      !activeButtons.some((activeButton) => activeButton.key === button.key)
  );

  function addToProfile(button: {
    key: string;
    label?: string;
    icon?: React.JSX.Element;
    placeholder?: string;
  }) {
    setActiveButtons((prev) => [...prev, button]);
  }

  async function saveDetails(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    try {
      const result = await saveSocials(formData);
      toast({
        variant: "default",
        description: "Details saved",
      });
    } catch (error) {
      setIsLoading(false);

      toast({
        variant: "destructive",
        description: "An error occured!, Try again later.",
      });
    }
    setIsLoading(false);
  }

  function removeButton(item: any) {
    setActiveButtons((prev) => {
      return prev.filter((button) => button.key !== item.key);
    });
  }

  return (
    <DashboardSectionComponent>
      <form onSubmit={saveDetails} className="p-10 font-light ">
        <div className="text-2xl py-4  text-white font-light">
          Social Buttons
        </div>
        <div className=" py-6">
          <ReactSortable list={activeButtons} setList={setActiveButtons}>
            {activeButtons.map((item) => (
              <div
                key={item.key}
                className="flex items-center space-y-3 h-full"
              >
                <div className="w-80 space-x-2 flex items-stretch justify-stretch mt-3">
                  <GripVertical className="cursor-grabbing" /> {item.icon}{" "}
                  <span className="font-light">{item.label}</span>
                </div>
                <Input
                  id={item.key}
                  name={item.key}
                  type="text"
                  className=" border-none text-lg bg-purple-500/10 p-5 py-8 focus-visible:ring-offset-0"
                  placeholder={item.placeholder}
                  required
                  defaultValue={
                    user && user.button && user.button[item.key]
                      ? user.button[item.key]
                      : ""
                  }
                />
                <button type="button" onClick={() => removeButton(item)}>
                  <FaTrash className="text-red-500 text-3xl ml-5 mr-2 p-1 rounded-md" />
                </button>
              </div>
            ))}
          </ReactSortable>
        </div>
        <div className="flex flex-wrap py-6 border-t border-white/30 ">
          {availableButtons.map((item) => (
            <button
              key={item.key}
              onClick={() => addToProfile(item)}
              type="button"
              className="flex items-center mr-2 my-1 bg-purple-500/20 hover:bg-gray-950 transition duration-300 rounded-full p-4 py-3 space-x-3"
            >
              {item.icon} <span className="text-sm">{item.label}</span> <Plus />
            </button>
          ))}
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-purple-800 hover:bg-purple-950 font-semibold text-white/90"
        >
          {isLoading && <Loader2 className="mr-2 inline animate-spin" />} Save
          Details
        </Button>
      </form>
    </DashboardSectionComponent>
  );
}

export default UserSocialForm;

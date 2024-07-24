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
  Mail,
  Phone,
  Plus,
} from "lucide-react";
import { FaDiscord, FaTrash, FaWhatsapp } from "react-icons/fa";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { saveSocials } from "@/actions/UserProfile";
import { toast } from "sonner";
import clsx from "clsx";

const allButtons = [
  {
    key: "email",
    label: "E-Mail",
    icon: <Mail />,
    placeholder: "JohnDoe@sharehub.xyz",
    regex:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  {
    key: "mobile",
    label: "Mobile",
    icon: <Phone />,
    placeholder: "+91 9900990099",
    regex: /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/,
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: <Instagram />,
    placeholder: "https://www.instagram.com/sharehub.xyz/",
    regex: /^https?:\/\/(www\.)?instagram\.com\/(?!\.|[0-9]+)(?:[a-zA-Z0-9_.]{1,30})$/    
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
    placeholder: "+91 9900990099",
    regex: /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/,
  },
  {
    key: "github",
    label: "Github",
    icon: <Github />,
    placeholder: "https://github.com/sharehub",
    regex: /^http(s)?:\/\/(www.)?github.com\/([a-z0-9](-?[a-z0-9]){0,38})$/i,
  },
  {
    key: "website",
    label: "Website",
    icon: <Link />,
    placeholder: "https://www.sharehub.xyz",
  },
];

const toastOptions = {
  id: 0,
  duration: 1500,
};

function UserSocialForm({ user, session }: any) {
  const pageSavedButton = user.button ? Object.keys(user.button) : [];
  const buttonInfo = pageSavedButton
    .map((k) => allButtons.find((b) => b.key === k))
    .filter(Boolean); // Ensure no undefined values are included

  const [activeButtons, setActiveButtons] = useState<any[]>(buttonInfo);
  const [prevState, setPrevState] = useState<any[]>(
    user?.button ? [...Object.entries(user.button)] : []
  ); // save state to check for changes

  // to save id of invalid input element
  const [error, setError] = useState("");

  const clearErrors = () => {
    if (error) setError("");
  };

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
    const formData = new FormData(event.currentTarget);
    const currentState = [...formData.entries()];

    const hasChanged = // stringify works because order is also important
      JSON.stringify(currentState) !== JSON.stringify(prevState);

    if (!hasChanged) {
      toast.info("Nothing to save", toastOptions);
      return;
    }

    // validate inputs before saving
    if (process.env.NODE_ENV === "production") {
      for (const [key, val] of currentState) {
        let button = allButtons.find((b) => b.key === key);
        if (
          button?.regex &&
          !button.regex.test(val.toString().trim()) // match regex
        ) {
          toast.error(`Invalid value for ${button.label}`, { id: key });
          document.getElementById(button.key)?.focus();
          setError(key);
          return;
        }
      }
    }

    const result = await saveSocials(formData);

    if (result.success) {
      toast.success(result.message);
      setPrevState(currentState);
    } else toast.error(result.message);
  }

  function removeButton(item: any) {
    setActiveButtons((prev) => {
      return prev.filter((button) => button.key !== item.key);
    });
  }

  return (
    <DashboardSectionComponent>
      <form onSubmit={saveDetails} onChange={clearErrors}>
        <div className="text-2xl font-bold py-4 pl-3">Social Buttons</div>
        <div className="px-6 py-6">
          <ReactSortable list={activeButtons} setList={setActiveButtons}>
            {activeButtons.map((item) => (
              <div
                key={item.key}
                className="flex items-center space-y-3 h-full"
              >
                <div className="w-80 space-x-2 flex mt-3">
                  <GripVertical className="cursor-grabbing" /> {item.icon}{" "}
                  <span>{item.label}</span>
                </div>
                <Input
                  id={item.key}
                  name={item.key}
                  type="text"
                  className={clsx(
                    "bg-transparent text-sm duration-200",
                    error === item.key &&
                      "focus-visible:outline-none focus-visible:border-red-400 focus-visible:ring-offset-red-400"
                  )}
                  placeholder={item.placeholder}
                  required
                  defaultValue={
                    user && user.button && user.button[item.key]
                      ? user.button[item.key]
                      : ""
                  }
                />
                <button type="button" onClick={() => removeButton(item)}>
                  <FaTrash className="bg-red-500 text-3xl ml-5 mr-2 p-1 rounded-md" />
                </button>
              </div>
            ))}
          </ReactSortable>
        </div>
        <div className="flex flex-wrap py-6 border-t border-white/30 mx-4">
          {availableButtons.map((item) => (
            <button
              key={item.key}
              onClick={() => addToProfile(item)}
              type="button"
              className="flex items-center mx-2 my-1 bg-gray-800 hover:bg-gray-950 transition duration-300 border rounded-full py-2 px-3 space-x-3"
            >
              {item.icon} <span className="text-sm">{item.label}</span> <Plus />
            </button>
          ))}
        </div>
        <div className="flex justify-center mb-5">
          <Button type="submit" className="border">
            Save Details
          </Button>
        </div>
      </form>
    </DashboardSectionComponent>
  );
}

export default UserSocialForm;

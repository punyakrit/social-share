"use client"
import React, { useState } from "react";
import DashboardSectionComponent from "./DashboardSectionComponent";
import { GripVertical, Link, Plus, Trash, UploadCloud } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ReactSortable } from "react-sortablejs";
import { savePageLinks } from "@/actions/UserProfile";
import { useToast } from "../ui/use-toast";

function UserLinks({ user, session }: any) {
  const [links, setLinks] = useState(user.links || []);
  const { toast } = useToast();

  async function handleImageChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const file = e.target.files?.[0];
    if (file) {
      const data = new FormData();
      data.set("file", file);
      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: data,
        });
        const result = await res.json();
        setLinks((prev: any) =>
          prev.map((link: any, i: number) =>
            i === index ? { ...link, icon: result.link } : link
          )
        );
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  }

  async function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const success = await savePageLinks(links);
    if (success) {
      toast({
        variant: "default",
        description: "Details saved",
      });
    }
  }

  function addNewLink(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLinks((prev: any) => [
      ...prev,
      {
        key: Date.now().toString(), // Unique identifier for each link
        title: "",
        icon: "",
        url: "",
      },
    ]);
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const { name, value } = e.target;
    setLinks((prev: any) =>
      prev.map((link: any, i: number) =>
        i === index ? { ...link, [name]: value } : link
      )
    );
  }

  function removeButton(item: any) {
    setLinks((prev: any[]) => {
      return prev.filter((link: any) => link.key !== item.key);
    });
  }

  return (
    <DashboardSectionComponent>
      <form onSubmit={save}>
        <div className="text-2xl font-bold py-4 pl-3">User Links</div>

        <button
          onClick={addNewLink}
          className="flex items-center text-lg px-3 mb-4"
        >
          <div className="bg-gray-400 rounded-full p-1 mr-3">
            <Plus />
          </div>
          <span>Add New</span>
        </button>
        <div>
          <ReactSortable list={links} setList={setLinks}>
            {links.map((l: any, index: number) => (
              <div key={l.key} className="mt-10 mx-6 flex items-center">
                <div>
                  <GripVertical className="cursor-grabbing mb text-3xl" />
                </div>
                <div className="w-52 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border flex items-center justify-center overflow-hidden">
                    {l.icon ? (
                      <img
                        src={l.icon}
                        alt="icon"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Link />
                    )}
                  </div>
                  <label className="text-xs flex cursor-pointer items-center mt-2 border px-2 py-1 rounded-md">
                    <input
                      id={"icon" + l.key}
                      onChange={(e) => handleImageChange(e, index)}
                      type="file"
                      className="hidden"
                    />
                    <UploadCloud className="mr-1" />
                    Change Icon
                  </label>
                </div>
                <div className="w-full space-y-4 px-6">
                  <Input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={l.title}
                    onChange={(e) => handleInputChange(e, index)}
                    className="bg-transparent"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="URL"
                    name="url"
                    value={l.url}
                    onChange={(e) => handleInputChange(e, index)}
                    className="bg-transparent"
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeButton(l)}
                  className="bg-red-500 p-2 rounded-md"
                >
                  <Trash />
                </button>
              </div>
            ))}
          </ReactSortable>
        </div>
        <div className="flex justify-center my-5">
          <Button type="submit" className="border">
            Save Details
          </Button>
        </div>
      </form>
    </DashboardSectionComponent>
  );
}

export default UserLinks;

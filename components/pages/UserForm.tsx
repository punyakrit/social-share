"use client";
import { getUsername } from "@/actions/setUsername";
import { useSearchParams } from "next/navigation";
import { Label } from "@radix-ui/react-label";
import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { toast, Toaster } from 'sonner';

function UserForm({ initialUsername }: any) {
  const searchParams = useSearchParams();
  const [username, setUsername] = useState(searchParams.get("username") || "");
  const [loading, setLoading] = useState(false);
  const [taken, setTaken] = useState(false);
  const router = useRouter();

  useEffect(() => {
    toast.success('Logged in successfully.');
  }, []);
  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const isAvailable = await getUsername(formData);

    setLoading(false);
    setTaken(!isAvailable);

    if (isAvailable) {
      toast.success('Username set up successfully!');
      setTimeout(() => {
        router.push(`/dashboard`);
      }, 3000); 
    } else {
      toast.error('Error setting up username. It might already be taken.');
    }
  }

  return (
    <div>
      <Toaster richColors  expand visibleToasts={1} />
      <form onSubmit={handleSubmit}>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          className="bg-transparent border-0 border-b px-3 py-2 text-lg"
          id="username"
          placeholder="Username"
          value={username} // Set the value to the username state
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
        {taken && <div className="text-red-500 mt-4">{"Username is Already Taken"}</div>}
        <button
          type="submit"
          disabled={loading}
          className="text-xl border-white border px-4 mt-4 rounded-3xl py-2 disabled:bg-gray-400"
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default UserForm;

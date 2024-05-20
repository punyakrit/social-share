"use client";
import React, { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateUsername } from "@/actions/validateUser"; // You may need to adjust this path
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Username() {
    const route = useRouter();
    const { data: session } = useSession();

    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isPending, startTransition] = useTransition();

    const email = session?.user?.email;

    const handleUsernameSubmit = async () => {
        startTransition(async () => {
            try {
                const res = await updateUsername(username, email);
                setMessage(res.message);
                setError("");
                if (res.message === 'Username updated') {
                    route.push('/dashboard'); // Redirect to dashboard if username updated successfully
                }
            } catch (err:any) {
                setError(err.message);
                setMessage("");
            }
        });
    };

    return (
        <div>
            <div className="text-6xl font-bold">Set Your Username</div>
            <div className="py-4 text-white/50">
                Choose a unique username to personalize your SocialHub page.
            </div>
            <div className="grid w-full max-w-sm items-center py-3 gap-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                    type="text"
                    className="bg-transparent border-0 border-b px-3 py-2 text-lg"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <button onClick={handleUsernameSubmit} className="text-xl border-white border px-4 mt-4 rounded-3xl py-2">Submit</button>
            {message && <div className="text-red-500 mt-4">{message}</div>}
            {error && <div className="text-red-500 mt-4">{error}</div>}
        </div>
    );
}

export default Username;

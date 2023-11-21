"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast/headless";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success",response.data);
            toast.success("Login success");
            router.push("/");
        } catch (error: any) {
            toast.error(error.message);
            console.log("Login failed "+error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email && user.password) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>
                {loading? "Loading...": "Login"}
            </h1>
            <hr />
            <label htmlFor="email">email</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" 
                id="email" 
                type="text" 
                value={user.email} 
                onChange={(e) => setUser({ ...user, email: e.target.value })} 
                placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" 
                id="password" 
                type="password" 
                value={user.password} 
                onChange={(e) => setUser({ ...user, password: e.target.value })} 
                placeholder="password"
            />
            <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onLogin}>{buttonDisabled? "No Login":"Login"}</button>
            <Link href="/signup">
                Don't have an account? Signup.
            </Link>
        </div>
    );
}
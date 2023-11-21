"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import {toast} from "react-hot-toast"
export default function ProfilePage() {
    const [data, setData] = useState("");
    
    const getUserDetails = async () => {
        try {
            const response = await axios.get("/api/users/about");
            setData(response.data.data);
            console.log(data)
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }
    useEffect(() => {
        getUserDetails();
    }, []);
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="bg-gray-200 p-4 rounded-lg w-full max-w-md shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-black">User Details</h1>
                <p className="text-lg text-black">
                    <span className="font-bold text-black">Username:</span> {data.username}
                </p>
                <p className="text-lg text-black">
                    <span className="font-bold text-black">Email:</span> {data.email}
                </p>
            </div>
            
            
        </div>
        
    )
}
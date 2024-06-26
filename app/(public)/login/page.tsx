"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Post } from "@/lib/request";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const handleSubmit = async () => {
    const ok = (await Post("/api/login", formData)).ok;
    if (ok) {
      localStorage.setItem("loged", ok);
      window.location.href = process.env.NEXT_PUBLIC_VERCEL_URL + "/attendance";
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[400px] border-2 border-black flex justify-center">
        <div className="m-10 w-full">
          <div className="font-bold text-2xl">FAP</div>
          <div className="flex flex-col gap-4 mt-4">
            <Input
              placeholder="Username"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <Button onClick={handleSubmit}>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

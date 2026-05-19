"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#f8f9fa]">
      <div className="w-[480px] bg-white rounded-2xl p-12 shadow-sm">
        <h1 className="text-3xl font-bold text-[#111111] text-center mb-2">Welcome Back</h1>
        <p className="text-sm text-[#666666] text-center mb-8">Sign in to your account to continue</p>
        
        <div className="mb-6">
          <label className="text-sm text-[#666666] mb-2 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4"
          />
        </div>
        
        <div className="mb-8">
          <label className="text-sm text-[#666666] mb-2 block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4"
          />
        </div>
        
        <button className="w-full py-3 bg-[#111111] text-white rounded-lg font-medium mb-4">
          Sign In
        </button>
        
        <div className="text-center">
          <Link href="/forgot-password" className="text-sm text-[#0066cc] hover:underline">
            Forgot password?
          </Link>
        </div>
        
        <div className="text-center mt-4">
          <span className="text-sm text-[#666666]">Don't have an account? </span>
          <Link href="/register" className="text-sm text-[#0066cc] hover:underline">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}

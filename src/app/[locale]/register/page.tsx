"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#f8f9fa]">
      <div className="w-[480px] bg-white rounded-2xl p-12 shadow-sm">
        <h1 className="text-3xl font-bold text-[#111111] text-center mb-2">Create Account</h1>
        <p className="text-sm text-[#666666] text-center mb-8">Sign up to start shopping</p>
        
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="text-sm text-[#666666] mb-2 block">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4"
            />
          </div>
          <div className="flex-1">
            <label className="text-sm text-[#666666] mb-2 block">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="text-sm text-[#666666] mb-2 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4"
          />
        </div>
        
        <div className="mb-6">
          <label className="text-sm text-[#666666] mb-2 block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4"
          />
        </div>
        
        <div className="mb-8">
          <label className="text-sm text-[#666666] mb-2 block">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4"
          />
        </div>
        
        <button className="w-full py-3 bg-[#111111] text-white rounded-lg font-medium mb-4">
          Create Account
        </button>
        
        <div className="text-center">
          <span className="text-sm text-[#666666]">Already have an account? </span>
          <Link href="/login" className="text-sm text-[#0066cc] hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

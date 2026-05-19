"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="flex gap-12 px-12 py-12">
      <div className="w-64">
        <h2 className="text-xl font-semibold text-[#111111] mb-6">My Account</h2>
        <div className="flex flex-col gap-2">
          <Link href="/profile" className="px-4 py-3 bg-[#f5f5f7] rounded-lg text-sm text-[#111111]">Profile</Link>
          <Link href="/orders" className="px-4 py-3 text-sm text-[#666666] hover:bg-[#f5f5f7] rounded-lg">Orders</Link>
          <Link href="/wishlist" className="px-4 py-3 text-sm text-[#666666] hover:bg-[#f5f5f7] rounded-lg">Wishlist</Link>
        </div>
      </div>
      
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-[#111111] mb-8">Profile Information</h1>
        
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
          <label className="text-sm text-[#666666] mb-2 block">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4"
          />
        </div>
        
        <div className="mb-8">
          <label className="text-sm text-[#666666] mb-2 block">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4"
          />
        </div>
        
        <button className="px-6 py-3 bg-[#111111] text-white rounded-lg font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
}

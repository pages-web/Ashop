"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <section className="py-16 px-12 bg-[#111111] text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-lg text-[#a0a0a0]">Have questions? We are here to help.</p>
      </section>
      
      <section className="py-16 px-12">
        <div className="flex gap-16 max-w-5xl mx-auto">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#111111] mb-6">Send us a Message</h2>
            
            <div className="mb-6">
              <label className="text-sm text-[#666666] mb-2 block">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4"
              />
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
              <label className="text-sm text-[#666666] mb-2 block">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-32 bg-[#f5f5f7] rounded-lg px-4 py-3 resize-none"
              />
            </div>
            
            <button className="px-6 py-3 bg-[#111111] text-white rounded-lg font-medium">
              Send Message
            </button>
          </div>
          
          <div className="w-[400px]">
            <h2 className="text-2xl font-bold text-[#111111] mb-6">Contact Information</h2>
            
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#111111] mb-2">Address</h3>
              <p className="text-sm text-[#666666]">Ulaanbaatar, Mongolia</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#111111] mb-2">Phone</h3>
              <p className="text-sm text-[#666666]">+976 9999 9999</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-[#111111] mb-2">Email</h3>
              <p className="text-sm text-[#666666]">support@ashop.mn</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

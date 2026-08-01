import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send
} from "lucide-react";

import { profile } from "../mock";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-12">

          <p className="text-blue-500 uppercase tracking-[4px] font-semibold">
            LET'S CONNECT
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="bg-slate-900 rounded-2xl border border-slate-700 p-8">

            <h2 className="text-3xl font-bold text-white">
              I'm open to new opportunities.
            </h2>

            <p className="text-slate-400 mt-5 leading-8">
              Looking for Data Analyst opportunities,
              freelance work and collaborations.
            </p>

            <div className="space-y-5 mt-10">

              <Info
                icon={<Mail size={18} />}
                text={profile.email}
              />

              <Info
                icon={<Phone size={18} />}
                text={profile.phone}
              />

              <Info
                icon={<MapPin size={18} />}
                text={profile.location}
              />

            </div>

            <div className="flex gap-4 mt-10">

              <Social
                href={profile.linkedin}
              >
                <Linkedin size={20}/>
              </Social>

              <Social
                href={profile.github}
              >
                <Github size={20}/>
              </Social>

            </div>

          </div>

          {/* CENTER */}

          <div className="bg-slate-900 rounded-2xl border border-slate-700 p-8">

            <div className="grid gap-5">

              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#111827] border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#111827] border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="bg-[#111827] border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500 resize-none"
              />

              <button
                className="bg-blue-600 hover:bg-blue-700 rounded-xl py-4 font-semibold flex justify-center items-center gap-2 transition"
              >
                <Send size={18}/>
                Send Message
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-slate-900 rounded-2xl border border-slate-700 p-8 flex items-center justify-center">

            <img
              src="/images/analytic.avif"
              alt="Analytics Illustration"
              className="w-full max-w-xl object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-slate-300">
      <div className="text-blue-500">
        {icon}
      </div>
      {text}
    </div>
  );
}

function Social({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition"
    >
      {children}
    </a>
  );
}
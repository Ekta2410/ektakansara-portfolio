import React from "react";
import { profile } from "../mock";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Row */}

        <div className="flex flex-col md:flex-row justify-end items-center gap-4 pb-6">

          <div className="flex items-center gap-4">

            <Social href={profile.github}>
              <Github size={20} />
            </Social>

            <Social href={profile.linkedin}>
              <Linkedin size={20} />
            </Social>

            <Social href={`mailto:${profile.email}`}>
              <Mail size={20} />
            </Social>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800"></div>

        {/* Bottom Row */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">

          <p className="text-slate-500 text-sm">
            © Ekta Kansara. All rights reserved.
          </p>

          <button
            onClick={toTop}
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition"
          >
            Back to Top
            <ArrowUp size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
}

function Social({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        w-12
        h-12
        rounded-xl
        border
        border-slate-700
        flex
        items-center
        justify-center
        text-slate-300
        hover:bg-blue-600
        hover:border-blue-600
        hover:text-white
        transition-all
        duration-300
      "
    >
      {children}
    </a>
  );
}
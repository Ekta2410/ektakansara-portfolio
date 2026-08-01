import React, { useEffect, useState } from "react";
import { ArrowDown, Menu, X } from "lucide-react";
import { profile } from "../mock";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const smoothTo = (e, href) => {
    e.preventDefault();

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1120]/95 backdrop-blur-xl border-b border-slate-800 shadow-lg"
          : "bg-[#0B1120]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#top"
          onClick={(e) => smoothTo(e, "#top")}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            EK
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              Ekta Kansara
            </h2>

            <p className="text-sm text-slate-400">
              Data Analyst
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-8">

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => smoothTo(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-blue-400 transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all shadow-lg"
          >
            Download Resume
            <ArrowDown className="w-4 h-4" />
          </a>

        </nav>

        {/* Mobile Button */}

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        } bg-[#0B1120] border-b border-slate-800`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => smoothTo(e, link.href)}
              className="text-lg font-medium text-slate-300 hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl w-fit"
          >
            Download Resume
            <ArrowDown className="w-4 h-4" />
          </a>

        </div>
      </div>
    </header>
  );
}
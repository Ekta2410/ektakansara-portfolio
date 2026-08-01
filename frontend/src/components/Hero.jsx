import React from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { profile } from "../mock";

export default function Hero() {
  return (
    <section id="top" className="pt-16 lg:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              DATA ANALYST
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-ink">
              Hi, I'm
              <br />
              <span className="text-blue-600">
                Ekta Kansara
              </span>
            </h1>

            <p className="mt-5 text-lg font-medium text-gray-600">
              SQL • Python • Power BI • Machine Learning
            </p>

            <p className="mt-6 text-gray-600 leading-8 max-w-xl">
              {profile.tagline}
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                View Projects
                <ArrowRight size={18}/>
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Download Resume
                <Download size={18}/>
              </a>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100"
              >
                <Github size={20}/>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100"
              >
                <Linkedin size={20}/>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100"
              >
                <Mail size={20}/>
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-blue-200 blur-3xl opacity-50"></div>

              <img
                src={profile.heroImage}
                alt="Ekta Kansara"
                className="relative w-[380px] lg:w-[430px] rounded-3xl shadow-2xl object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
import React from "react";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { about, profile } from "../mock";
import useReveal from "../hooks/useReveal";

export default function About() {

  const ref = useReveal();

  return (
    <section
      id="about"
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-14">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Passionate about transforming
            <br />
            data into business insights.
          </h2>

        </div>

        <div
          ref={ref}
          className="reveal grid lg:grid-cols-2 gap-14 items-start"
        >

          {/* LEFT */}

          <div>

            {about.paragraphs.map((text, index) => (

              <p
                key={index}
                className="text-gray-300 leading-8 mb-6 text-lg"
              >
                {text}
              </p>

            ))}

            {/* Focus */}

            <div className="mt-10">

              <h3 className="text-xl font-semibold text-white mb-5">
                Core Expertise
              </h3>

              <div className="flex flex-wrap gap-3">

                {about.focus.map((item) => (

                  <span
                    key={item}
                    className="px-5 py-2 rounded-full bg-blue-600/10 border border-blue-500 text-blue-400"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-5">

            <InfoCard
              icon={<User size={26} />}
              title="Role"
              value="Data Analyst"
            />

            <InfoCard
              icon={<MapPin size={26} />}
              title="Location"
              value={profile.location}
            />

            <InfoCard
              icon={<GraduationCap size={26} />}
              title="Education"
              value="MCA - Data Science"
            />

            <InfoCard
              icon={<Briefcase size={26} />}
              title="Experience"
              value="1 Internship"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

function InfoCard({ icon, title, value }) {

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition-all">

      <div className="text-blue-500 mb-5">
        {icon}
      </div>

      <h4 className="text-gray-400 text-sm">
        {title}
      </h4>

      <p className="text-white text-lg font-semibold mt-2">
        {value}
      </p>

    </div>

  );

}
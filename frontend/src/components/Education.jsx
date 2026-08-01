import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { education } from "../mock";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-16">

          <p className="text-blue-500 uppercase tracking-[4px] font-semibold">
            EDUCATION
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Academic
            <span className="text-blue-500"> Journey</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl text-lg">
            My educational background that built my foundation in
            programming, analytics and data science.
          </p>

        </div>

        <div className="relative border-l-2 border-blue-500 ml-4">

          {education.map((item, index) => (
            <EducationCard
              key={index}
              item={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

function EducationCard({ item }) {

  const ref = useReveal();

  return (

    <div
      ref={ref}
      className="reveal relative ml-10 mb-12"
    >

      {/* Timeline Dot */}

      <div className="absolute -left-[52px] top-6 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">

        <GraduationCap
          size={18}
          className="text-white"
        />

      </div>

      {/* Card */}

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

          <div>

            <h3 className="text-3xl font-bold text-white">
              {item.school}
            </h3>

            <p className="text-blue-400 mt-2 text-lg">
              {item.degree}
            </p>

          </div>

          <div className="flex flex-col gap-2 text-slate-400">

            <div className="flex items-center gap-2">

              <Calendar size={18} />

              {item.period}

            </div>

            <div className="flex items-center gap-2">

              <MapPin size={18} />

              {item.location}

            </div>

          </div>

        </div>

        {item.score && (

          <div className="mt-8">

            <span className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500 text-blue-400 font-medium">

              {item.score}

            </span>

          </div>

        )}

      </div>

    </div>

  );

}
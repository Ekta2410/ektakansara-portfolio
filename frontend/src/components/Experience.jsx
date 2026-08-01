import React from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import useReveal from "../hooks/useReveal";
import { experience } from "../mock";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 border-t border-line"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeader
          index="03"
          kicker="Experience"
          title={
            <>
              Professional <span className="italic">Experience</span>
            </>
          }
          subtitle="Hands-on experience solving business problems using SQL, Python, Excel and Power BI."
        />

        <div className="mt-14 space-y-10">

          {experience.map((item, index) => (
            <ExperienceCard
              key={index}
              item={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

function ExperienceCard({ item }) {

  const ref = useReveal();

  return (

    <div
      ref={ref}
      className="reveal relative border border-line rounded-2xl bg-paper p-8 hover:shadow-xl transition-all duration-300"
    >

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

        {/* Left */}

        <div className="flex gap-5">

          <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">

            <Briefcase
              className="text-blue-600"
              size={28}
            />

          </div>

          <div>

            <h3 className="text-3xl font-semibold text-ink">
              {item.role}
            </h3>

            <p className="text-lg text-blue-600 mt-1">
              {item.company}
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-2 text-sm text-muted-ink">

          <Calendar size={18} />

          {item.period}

        </div>

      </div>

      {/* Bullet Points */}

      <div className="mt-8 space-y-4">

        {item.bullets.map((bullet, i) => (

          <div
            key={i}
            className="flex items-start gap-3"
          >

            <CheckCircle2
              className="text-green-600 mt-1 flex-shrink-0"
              size={18}
            />

            <p className="text-ink-soft leading-7">
              {bullet}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}
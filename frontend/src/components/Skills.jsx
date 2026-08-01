import React from "react";
import {
  Code2,
  Database,
  BarChart3,
  Wrench,
  BrainCircuit,
  Award,
  CheckCircle,
} from "lucide-react";
import useReveal from "../hooks/useReveal";
import { skills, extras } from "../mock";

const icons = {
  Languages: Code2,
  "Analytics & BI": BarChart3,
  "Python Libraries": BrainCircuit,
  "Databases & Warehousing": Database,
  Tools: Wrench,
  Core: Award,
};

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section
      id="skills"
      className="py-24 bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-16">

          <p className="text-blue-500 uppercase tracking-[4px] font-semibold">
            TECHNICAL SKILLS
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Technologies &
            <span className="text-blue-500"> Tools</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl text-lg">
            My technical toolkit for building analytics, business intelligence,
            machine learning and data-driven applications.
          </p>

        </div>

        {/* Skill Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {groups.map(([name, items]) => {

            const Icon = icons[name] || Code2;

            return (
              <SkillCard
                key={name}
                Icon={Icon}
                title={name}
                items={items}
              />
            );

          })}

        </div>

        {/* Certifications */}

        <div className="mt-24">

          <h2 className="text-5xl font-bold text-white mb-10">
            Professional
            <span className="text-blue-500"> Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {extras.certifications.map((cert, i) => (

              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-start
                  gap-4
                  bg-slate-900
                  border
                  border-slate-700
                  rounded-3xl
                  p-6
                  hover:border-blue-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >

                <CheckCircle
                  className="text-green-500 mt-1"
                  size={22}
                />

                <div>

                  <h4 className="text-xl font-semibold text-white">
                    {cert.title}
                  </h4>

                  <p className="text-slate-400 mt-2">
                    {cert.issuer}
                  </p>

                  <p className="text-blue-400 font-medium mt-4">
                    View Certificate →
                  </p>

                </div>

              </a>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

function SkillCard({ Icon, title, items }) {

  const ref = useReveal();

  return (

    <div
      ref={ref}
      className="
        reveal
        bg-slate-900
        border
        border-slate-700
        rounded-3xl
        p-8
        hover:border-blue-500
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-500
      "
    >

      <div className="flex items-center gap-4 mb-6">

        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500 flex items-center justify-center">

          <Icon
            className="text-blue-500"
            size={28}
          />

        </div>

        <div>

          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="text-sm text-slate-400 mt-1">
            {items.length} Skills
          </p>

        </div>

      </div>

      <div className="space-y-3">

        {items.map((item) => (

          <div
            key={item}
            className="flex items-center gap-3 py-1"
          >

            <CheckCircle
              className="text-green-500"
              size={18}
            />

            <span className="text-slate-200">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

}
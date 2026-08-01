import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";
import useReveal from "../hooks/useReveal";
import { projects } from "../mock";

export default function Work() {
  const ref = useReveal();

  return (
    <section
      id="work"
      className="py-16 border-t border-line"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeader
          index="04"
          kicker="Featured Projects"
          title={
            <>
              My <span className="italic">Projects</span>
            </>
          }
          subtitle="Projects built using SQL, Python, Power BI and Machine Learning."
        />

        <div
          ref={ref}
          className="reveal mt-14 grid md:grid-cols-2 gap-8"
        >

          {projects.map((project) => (

            <div
              key={project.id}
              className="group bg-paper rounded-2xl border border-line overflow-hidden hover:shadow-xl transition-all duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold text-ink">
                  {project.title}
                </h3>

                <p className="mt-3 text-ink-soft leading-7">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.stack.map((skill) => (

                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-paper-2 border border-line text-xs uppercase"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

                <div className="flex items-center gap-4 mt-6">

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  <button className="inline-flex items-center gap-2 border border-line px-5 py-2 rounded-lg hover:bg-paper-2 transition">
                    View Details
                    <ArrowUpRight size={18}/>
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
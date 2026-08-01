import React from "react";
import {
  Shield,
  Trophy,
  Users,
  Star
} from "lucide-react";
import useReveal from "../hooks/useReveal";

const achievements = [
  {
    icon: Shield,
    title: "National Cadet Corps (NCC)",
    subtitle: "B & C Certificate Holder",
    description:
      "Completed two Annual Training Camps, developing leadership, discipline and teamwork skills."
  },
  {
    icon: Trophy,
    title: "Sports Achievement",
    subtitle: "Inter-College Championships",
    description:
      "Secured 2nd Position in Kabaddi and Handball competitions."
  },
  {
    icon: Users,
    title: "Security Coordinator",
    subtitle: "College Events",
    description:
      "Managed crowd coordination and led a team during college events involving 30+ students."
  },
  {
    icon: Star,
    title: "Cultural Performer",
    subtitle: "National Level",
    description:
      "Performed at national-level cultural events before an audience of over 10,000 people."
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-16">

          <p className="text-blue-500 uppercase tracking-[4px] font-semibold">
            LEADERSHIP
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Leadership &
            <span className="text-blue-500"> Achievements</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl text-lg">
            Experiences that strengthened my leadership,
            communication, teamwork and responsibility.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item, index) => (
            <AchievementCard
              key={index}
              item={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

function AchievementCard({ item }) {

  const ref = useReveal();

  const Icon = item.icon;

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

      <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500 flex items-center justify-center mb-6">

        <Icon
          size={30}
          className="text-blue-500"
        />

      </div>

      <h3 className="text-2xl font-bold text-white">
        {item.title}
      </h3>

      <p className="text-blue-400 mt-2">
        {item.subtitle}
      </p>

      <p className="text-slate-400 mt-5 leading-8">
        {item.description}
      </p>

    </div>
  );
}
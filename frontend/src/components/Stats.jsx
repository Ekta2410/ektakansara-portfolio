import React from "react";

const stats = [
  {
    value: "100K+",
    label: "Rows Analyzed",
  },
  {
    value: "4+",
    label: "Analytics Projects",
  },
  {
    value: "4",
    label: "Power BI Dashboards",
  },
  {
    value: "1",
    label: "Industry Internship",
  },
];

export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-blue-500 transition-all"
            >
              <h2 className="text-5xl font-bold text-blue-500">
                {item.value}
              </h2>

              <p className="mt-4 text-slate-300">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
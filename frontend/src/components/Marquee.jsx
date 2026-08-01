import React from 'react';

export default function Marquee({ items = [] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden no-scrollbar border-y border-line bg-paper-2/40">
      <div className="marquee-track py-6">
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 font-serif italic text-3xl md:text-5xl text-ink whitespace-nowrap">
            {t}
            <span className="text-accent text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

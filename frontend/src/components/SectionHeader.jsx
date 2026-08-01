import React from 'react';
import useReveal from '../hooks/useReveal';

export default function SectionHeader({ index, kicker, title, subtitle }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end mb-12 md:mb-16">
      <div className="md:col-span-3">
        <div className="flex items-center gap-3 text-[11px] tracking-widest-2 uppercase text-ink-soft">
          <span className="font-mono text-accent">{index}</span>
          <span className="h-px w-10 bg-[color:var(--line)]" />
          <span>{kicker}</span>
        </div>
      </div>
      <div className="md:col-span-9">
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.02] text-ink">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-ink-soft text-base md:text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

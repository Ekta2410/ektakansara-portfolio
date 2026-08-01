import { useEffect, useMemo, useRef } from "react";

export default function useReveal(options = {}) {
  const ref = useRef(null);

  const observerOptions = useMemo(
    () => ({
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px",
      ...options,
    }),
    [options]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, observerOptions);

    io.observe(el);

    return () => io.disconnect();
  }, [observerOptions]);

  return ref;
}
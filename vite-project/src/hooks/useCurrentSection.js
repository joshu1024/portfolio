// hooks/useCurrentSection.js
import { useEffect, useState } from "react";

export const useCurrentSection = (sectionIds) => {
  const [current, setCurrent] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setCurrent(visible.target.id);
        }
      },
      {
        threshold: 0.6, // Higher threshold to trigger when most of section is in view
      }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [sectionIds]);

  return current;
};

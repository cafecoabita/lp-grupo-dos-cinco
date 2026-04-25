import { useEffect, useRef, ReactNode } from "react";

// Kept for backwards compatibility (no longer used)
export const fadeUp = {};
export const stagger = {};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const AnimatedSection = ({ children, className = "", delay = 0, id }: AnimatedSectionProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`;
          el.classList.add("animate-in");
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <section
      ref={ref}
      id={id}
      className={`opacity-0 translate-y-10 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 ${className}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;

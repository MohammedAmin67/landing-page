import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

export const HeroSection = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-title",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
      )
        .fromTo(
          ".hero-subtitle",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          ".hero-buttons",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".hero-image-wrapper",
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2 },
          "-=1",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="hero-image-wrapper absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>
      <div
        ref={contentRef}
        className="container-industrial relative z-10 pt-20"
      >
        <div className="max-w-3xl">
          <h1 className="hero-title font-serif text-4xl md:text-5xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
            Precision Manufacturing, Machining & Engineering Solutions
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl leading-relaxed">
            End-to-end precision services: manufacturing, machining, assembly,
            design, and inspection built for demanding industry standards.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#services")}
              className=" border-2 border-primary-foreground text-primary hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-base"
            >
              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#courses")}
              className="border-2 border-primary-foreground text-primary hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-base"
            >
              View Courses
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-primary-foreground/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

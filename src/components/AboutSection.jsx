import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import gearsImage from "@/assets/gears-detail.jpg";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-image",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".about-text > *",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-background"
    >
      <div className="container-industrial">
        <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="about-image relative">
            <div className="relative rounded-lg overflow-hidden shadow-industrial">
              <img
                src={gearsImage}
                alt="Precision mechanical gears"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
          </div>
          <div className="about-text">
            <span className="text-accent font-medium uppercase tracking-widest text-sm mb-4 block">
              About Qubitedge
            </span>
            <h2 className="font-serif text-foreground mb-6">
              Precision Manufacturing Solutions Built for Performance
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Qubitedge, we deliver end-to-end manufacturing solutions
              focused on precision, reliability, and consistency. Our
              manufacturing capabilities support prototype development,
              small-batch production, and scalable series manufacturing, meeting
              stringent quality and performance requirements. We specialize in
              custom-engineered mechanical components, manufactured to exact
              customer specifications, drawings, and functional requirements.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Capabilities: precision machining, custom component manufacturing,
              fabrication & assembly, tooling, jigs & fixtures, reverse
              engineering & value engineering, surface finishing & post
              processing.
            </p>
            <Button className="btn-industrial gap-2">
              <FileText className="w-4 h-4" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

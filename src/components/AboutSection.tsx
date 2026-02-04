import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import gearsImage from '@/assets/gears-detail.jpg';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-image',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.about-text > *',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.about-text',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-background">
      <div className="container-industrial">
        <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="about-image relative">
            <div className="relative rounded-lg overflow-hidden shadow-industrial">
              <img
                src={gearsImage}
                alt="Precision mechanical gears"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
          </div>

          {/* Text Content */}
          <div className="about-text">
            <span className="text-accent font-medium uppercase tracking-widest text-sm mb-4 block">
              About MechPro
            </span>
            <h2 className="font-serif text-foreground mb-6">
              Excellence in Mechanical Engineering Since 1987
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over three decades, MechPro has been at the forefront of precision manufacturing. Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for industries ranging from aerospace to automotive.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With state-of-the-art facilities spanning 50,000 square feet and a team of over 150 skilled engineers and technicians, we deliver solutions that exceed expectations—on time, every time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-border">
              <div>
                <div className="font-serif text-3xl md:text-4xl text-primary font-bold">35+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl text-primary font-bold">500+</div>
                <div className="text-muted-foreground text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl text-primary font-bold">150+</div>
                <div className="text-muted-foreground text-sm">Expert Team</div>
              </div>
            </div>

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

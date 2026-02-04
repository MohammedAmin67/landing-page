import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cog, Factory, Wrench, Truck, Shield, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Cog,
    title: 'Precision Machining',
    description: 'CNC milling, turning, and grinding with tolerances to ±0.001". Advanced 5-axis capabilities for complex geometries.',
  },
  {
    icon: Factory,
    title: 'Custom Fabrication',
    description: 'From prototypes to production runs, we fabricate components in steel, aluminum, titanium, and specialty alloys.',
  },
  {
    icon: Wrench,
    title: 'Assembly & Integration',
    description: 'Complete mechanical assembly services with quality inspection at every stage of production.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'ISO 9001:2015 certified processes with CMM inspection and full documentation traceability.',
  },
  {
    icon: Settings,
    title: 'Engineering Design',
    description: 'CAD/CAM design services, DFM analysis, and reverse engineering for legacy components.',
  },
  {
    icon: Truck,
    title: 'Logistics Support',
    description: 'Just-in-time delivery, inventory management, and global shipping coordination.',
  },
];

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.section-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.section-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.service-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-padding bg-steel-gradient"
    >
      <div className="container-industrial">
        <div className="section-header text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-widest text-sm mb-4 block">
            What We Do
          </span>
          <h2 className="font-serif text-foreground mb-4">
            Our Manufacturing Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive mechanical solutions backed by decades of expertise and state-of-the-art technology.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card card-industrial group cursor-pointer"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

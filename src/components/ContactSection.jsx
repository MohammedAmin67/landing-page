import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Robert Chen",
    role: "VP of Operations, Aerospace Dynamics",
    content:
      "Qubitedge delivered precision components that exceeded our specifications. Their attention to detail and commitment to quality is unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Engineer, AutoTech Solutions",
    content:
      "Working with Qubitedge transformed our production timeline. Their engineering expertise and rapid turnaround helped us meet critical deadlines.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Procurement Director, Medical Devices Inc.",
    content:
      "The quality control processes at Qubitedge give us complete confidence. Every component arrives with full documentation and zero defects.",
    rating: 5,
  },
];

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".contact-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".testimonial-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".contact-form",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-background"
    >
      <div className="container-industrial">
        <div className="contact-header text-center mb-16 -mt-10">
          <span className="text-accent font-medium uppercase tracking-widest text-sm mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-serif text-foreground mb-4">Contact & Reviews</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to start your project? Reach out to our team or see what our
            clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start -mt-5">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Let's Discuss Your Project
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our team of engineers is ready to help you bring your ideas to
                life. Contact us for a free consultation.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">
                    Email Us
                  </div>
                  <a
                    href="mailto:info@qubitedge.com"
                    className="text-accent hover:underline"
                  >
                    info@qubitedge.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">
                    Call Us
                  </div>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">
                    Visit Us
                  </div>
                  <p className="text-muted-foreground">
                    1234 Industrial Parkway
                    <br />
                    Manufacturing District, CA 90210
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Card className="contact-form card-industrial">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className="input-industrial"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="input-industrial"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    className="input-industrial min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="btn-industrial w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

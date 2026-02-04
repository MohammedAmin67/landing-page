import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const OrderSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    productName: '',
    description: '',
    credentials: '',
    requirements: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.order-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.order-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.order-form',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.order-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} id="order" className="section-padding bg-steel-gradient">
      <div className="container-industrial">
        <div className="order-header text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-widest text-sm mb-4 block">
            Request a Quote
          </span>
          <h2 className="font-serif text-foreground mb-4">
            Order Requirements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tell us about your project. Our engineering team will review your requirements and provide a detailed quote within 48 hours.
          </p>
        </div>

        <Card className="order-form max-w-4xl mx-auto card-industrial">
          <CardHeader>
            <CardTitle className="font-serif">Project Details</CardTitle>
            <CardDescription>
              Please provide as much detail as possible to help us understand your requirements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-accent mb-4" />
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  Request Submitted!
                </h3>
                <p className="text-muted-foreground">
                  Our team will review your requirements and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="Your company name"
                      className="input-industrial"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="productName">Product Name *</Label>
                    <Input
                      id="productName"
                      name="productName"
                      placeholder="Name of the product/component"
                      className="input-industrial"
                      value={formData.productName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Product Description & Measurements *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe the product, including dimensions, tolerances, materials, and any specific requirements..."
                    className="input-industrial min-h-[120px]"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="credentials">Contact Information & Credentials *</Label>
                  <Textarea
                    id="credentials"
                    name="credentials"
                    placeholder="Your name, email, phone number, and any relevant company credentials or certifications..."
                    className="input-industrial min-h-[100px]"
                    value={formData.credentials}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Additional Order Requirements</Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    placeholder="Quantity, delivery timeline, packaging requirements, quality standards, or any other special instructions..."
                    className="input-industrial min-h-[100px]"
                    value={formData.requirements}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="btn-industrial w-full md:w-auto gap-2">
                  <Send className="w-4 h-4" />
                  Submit Order Request
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

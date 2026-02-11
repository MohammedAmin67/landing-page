import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

export const OrderSection = () => {
  const sectionRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    productName: "",
    description: "",
    credentials: "",
    requirements: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".order-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".order-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".order-form",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".order-form",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables before proceeding",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          companyName: formData.companyName,
          productName: formData.productName,
          description: formData.description,
          credentials: formData.credentials,
          requirements: formData.requirements,
          time: new Date().toLocaleString(),
        },
        publicKey,
      );

      setIsSubmitted(true);
      setFormData({
        companyName: "",
        productName: "",
        description: "",
        credentials: "",
        requirements: "",
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      alert("Failed to send message. Please try again later.");
      console.log("Failed to send message. Please try again later", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="order"
      className="section-padding bg-steel-gradient"
    >
      <div className="container-industrial">
        <div className="order-header text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-widest text-sm mb-4 block">
            Request a Quote
          </span>
          <h2 className="font-serif text-foreground mb-4">
            Order Requirements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tell us about your project. Our engineering team will review your
            requirements and provide a detailed quote within 48 hours.
          </p>
        </div>
        <Card className="order-form max-w-4xl mx-auto card-industrial">
          <CardHeader>
            <CardTitle className="font-serif">Project Details</CardTitle>
            <CardDescription>
              Please provide as much detail as possible to help us understand
              your requirements.
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
                  Our team will review your requirements and get back to you
                  shortly.
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
                  <Label htmlFor="description">
                    Product Description & Measurements *
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Describe the product, including dimensions, tolerances, materials, and any specific requirements..."
                    className="input-industrial min-h-[120px] resize-none"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="credentials">
                    Contact Information & Credentials *
                  </Label>
                  <Textarea
                    id="credentials"
                    name="credentials"
                    rows={3}
                    placeholder="Your name, email, phone number, and any relevant company credentials or certifications..."
                    className="input-industrial min-h-[100px] resize-none"
                    value={formData.credentials}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements">
                    Additional Order Requirements
                  </Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    rows={3}
                    placeholder="Quantity, delivery timeline, packaging requirements, quality standards, or any other special instructions..."
                    className="input-industrial min-h-[100px] resize-none"
                    value={formData.requirements}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="btn-industrial w-full md:w-auto gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Order Request
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

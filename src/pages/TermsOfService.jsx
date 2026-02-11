import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TermsOfService = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    );
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-background">
      <section
        ref={sectionRef}
        className="container-industrial mx-auto py-12 px-4 max-w-2xl rounded-xl bg-background shadow-lg border border-gray-200 text-gray-900"
      >
        <h1 className="font-serif text-3xl font-bold text-primary mb-6">
          Terms of Service
        </h1>
        <p className="mb-8 text-lg">
          By using Qubitedge’s website and services, you agree to the following
          terms and conditions.
        </p>
        <h2 className="font-serif text-lg font-semibold mt-8 mb-3">Site Use</h2>
        <ul className="list-disc ml-7 mb-8 text-base space-y-2">
          <li>Please use our site responsibly and lawfully.</li>
          <li>
            We reserve the right to suspend or terminate access for violation of
            these terms.
          </li>
        </ul>
        <h2 className="font-serif text-lg font-semibold mb-3">
          Intellectual Property
        </h2>
        <ul className="list-disc ml-7 mb-8 text-base space-y-2">
          <li>
            All content is © Qubitedge or licensed to us; copying or
            redistribution is prohibited without written consent.
          </li>
          <li>Trademarks and logos may not be used without consent.</li>
        </ul>
        <h2 className="font-serif text-lg font-semibold mb-3">
          Limitation of Liability
        </h2>
        <ul className="list-disc ml-7 mb-8 text-base space-y-2">
          <li>
            We are not liable for damages or losses resulting from your use of
            this website or services.
          </li>
          <li>Our responsibility is limited as permitted by applicable law.</li>
        </ul>
        <h2 className="font-serif text-lg font-semibold mb-3">Governing Law</h2>
        <p className="mb-6 text-base">
          These terms are governed by the laws of India. Disputes shall be
          resolved in Indian courts.
        </p>
        <h2 className="font-serif text-lg font-semibold mb-3">Contact</h2>
        <p>
          Questions? Contact us at{" "}
          <a
            href="mailto:info@qubitedge.com"
            className="text-accent hover:underline font-semibold"
          >
            info@qubitedge.com
          </a>
          .
        </p>
        <p className="text-xs text-gray-600 mt-10">
          Last updated: February 2026. Qubitedge reserves the right to modify
          these terms at any time.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;

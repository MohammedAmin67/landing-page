import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <p className="mb-4 text-lg">
          At Qubitedge, your privacy is our top priority. This policy explains
          how we collect, use, and protect your data when you use our website or
          services.
        </p>
        <h2 className="font-serif text-lg font-semibold mt-8 mb-3">
          Information We Collect
        </h2>
        <ul className="list-disc ml-7 mb-8 text-base space-y-2">
          <li>
            Personal information like name, email, and contact details you
            submit to us.
          </li>
          <li>
            Technical details (browser, device, IP) for analytics and security.
          </li>
        </ul>
        <h2 className="font-serif text-lg font-semibold mb-3">
          Use of Information
        </h2>
        <ul className="list-disc ml-7 mb-8 text-base space-y-2">
          <li>To respond to your inquiries or process orders.</li>
          <li>To enhance, personalize, and secure our website and services.</li>
          <li>To comply with any applicable legal requirements.</li>
        </ul>
        <h2 className="font-serif text-lg font-semibold mb-3">Sharing</h2>
        <p className="mb-6 text-base">
          We do not sell or share your information except as required by law or
          for service fulfillment (like shipping or payment processing).
        </p>
        <h2 className="font-serif text-lg font-semibold mb-3">Your Rights</h2>
        <ul className="list-disc ml-7 mb-8 text-base space-y-2">
          <li>
            Request access, correction, or deletion of your personal data.
          </li>
          <li>Opt out of marketing communications.</li>
          <li>
            Contact us with privacy concerns at{" "}
            <a
              href="mailto:info@qubitedge.com"
              className="text-accent hover:underline font-semibold"
            >
              info@qubitedge.com
            </a>
            .
          </li>
        </ul>
        <h2 className="font-serif text-lg font-semibold mb-3">
          Policy Updates
        </h2>
        <p className="mb-6 text-base">
          This policy may be updated at any time. Please check this page for the
          latest information.
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Last updated: February 2026
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

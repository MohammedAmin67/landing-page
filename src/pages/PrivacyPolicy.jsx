const PrivacyPolicy = () => (
  <section className="container mx-auto py-12 max-w-2xl">
    <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
    <p className="mb-4">
      We value your privacy and are committed to protecting your personal
      information. This policy describes how we collect, use, and safeguard your
      data when you use our site or services.
    </p>
    <ul className="list-disc ml-6 mb-6 text-muted-foreground">
      <li>
        We only collect information you voluntarily provide when contacting us
        or submitting forms.
      </li>
      <li>
        Your information will be used strictly for communication and service
        purposes.
      </li>
      <li>
        We do not share your personal data with third parties except as required
        by law.
      </li>
      <li>
        Cookies are used solely for site functionality and user experience
        improvements.
      </li>
      <li>
        You may contact us at any time to request details or removal of your
        personal information.
      </li>
    </ul>
    <p>
      For questions or concerns about your privacy, please email us at{" "}
      <a
        href="mailto:info@qubitedge.com"
        className="text-accent hover:underline"
      >
        info@qubitedge.com
      </a>
      .
    </p>
  </section>
);

export default PrivacyPolicy;

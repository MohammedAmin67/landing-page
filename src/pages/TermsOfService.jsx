const TermsOfService = () => (
  <section className="container mx-auto py-12 max-w-2xl">
    <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
    <p className="mb-4">
      By accessing or using our website, you agree to the following terms:
    </p>
    <ul className="list-disc ml-6 mb-6 text-muted-foreground">
      <li>You will use our site and services responsibly and lawfully.</li>
      <li>
        Content provided on this website is for informational purposes and may
        change at any time.
      </li>
      <li>
        We reserve the right to modify, suspend, or discontinue any aspect of
        the site without notice.
      </li>
      <li>
        We are not liable for any damages or losses arising from your use of the
        website.
      </li>
      <li>
        Your continued use of the site constitutes acceptance of these terms.
      </li>
    </ul>
    <p>
      If you have any questions about these terms, please contact us at{" "}
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

export default TermsOfService;

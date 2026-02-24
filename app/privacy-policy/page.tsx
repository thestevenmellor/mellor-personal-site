import Image from "next/image";
import type { Metadata } from "next";
import "./privacy.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Steven Mellor.",
};

export default function PrivacyPolicy() {
  return (
    <main className="privacy">
      <header className="privacy-header">
        <a href="/">
          <Image src="/favicon.png" alt="Steven Mellor" width={48} height={48} />
        </a>
      </header>

      <article className="privacy-content">
        <h1>Privacy Policy</h1>
        <p className="privacy-date">Last updated: February 2026</p>

        <p>By accessing or using this website, you agree to the terms of this Privacy Policy. Please read it carefully.</p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of personal information:</p>
        <ul>
          <li>Name and email address (when you subscribe to the newsletter or purchase a product)</li>
          <li>Payment and billing information (processed securely by third-party providers)</li>
          <li>Usage data such as pages visited, time on site, and referring URLs</li>
          <li>IP address and browser/device information</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Deliver newsletters, courses, and products you've signed up for</li>
          <li>Send marketing communications (you can opt out at any time)</li>
          <li>Process payments and fulfill orders</li>
          <li>Improve the website and understand how visitors interact with it</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Cookies & Analytics</h2>
        <p>This site uses cookies and third-party analytics tools including Google Analytics and Datafast to collect anonymous usage data. This helps us understand traffic and improve content. You can disable cookies in your browser settings at any time.</p>

        <h2>Email Communications</h2>
        <p>When you subscribe to our newsletter, you consent to receiving weekly emails. Every email includes an unsubscribe link. We will never sell or rent your email address to third parties.</p>

        <h2>Third-Party Services</h2>
        <p>We use trusted third-party services to operate this business, including:</p>
        <ul>
          <li><strong>Flodesk</strong> — email marketing</li>
          <li><strong>ThriveCart</strong> — payment processing and product delivery</li>
          <li><strong>Vercel</strong> — website hosting</li>
        </ul>
        <p>These providers have their own privacy policies governing the data we share with them.</p>

        <h2>How Your Data Is Stored</h2>
        <p>Your data is stored on secure servers. We take reasonable technical and organisational measures to protect your information from unauthorised access, loss, or misuse. However, no method of transmission over the internet is 100% secure.</p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Unsubscribe from marketing communications at any time</li>
          <li>Lodge a complaint with your local data protection authority</li>
        </ul>
        <p>To exercise any of these rights, contact us at the email below.</p>

        <h2>GDPR</h2>
        <p>If you are a resident of the European Union, you have additional rights under the General Data Protection Regulation (GDPR). We process your data on the lawful basis of consent and legitimate interest. You may withdraw consent at any time.</p>

        <h2>Children's Privacy</h2>
        <p>This website is intended for users aged 18 and over. We do not knowingly collect personal information from anyone under 18. If you believe a minor has submitted their data, please contact us and we will delete it promptly.</p>

        <h2>Third-Party Links</h2>
        <p>This site may contain links to external websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before providing any personal information.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance of the revised policy.</p>

        <h2>Contact</h2>
        <p>If you have any questions about this Privacy Policy, please email: <a href="mailto:hello@thestevenmellor.com">hello@thestevenmellor.com</a></p>
      </article>
    </main>
  );
}

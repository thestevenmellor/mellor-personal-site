import Image from "next/image";
import type { Metadata } from "next";
import "../privacy-policy/privacy.css";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund policy for Ampliphy, LLC.",
};

export default function RefundPolicy() {
  return (
    <main className="privacy">
      <header className="privacy-header">
        <a href="/">
          <Image src="/sjm-brand.png" alt="Steven Mellor" width={100} height={100} />
        </a>
      </header>

      <article className="privacy-content">
        <h1>REFUND POLICY</h1>
        <h2>Ampliphy, LLC</h2>
        <p className="privacy-date"><em>Last Updated: February 24, 2026</em></p>

        <hr />
        <h2>ALL SALES ARE FINAL</h2>
        <p>When you purchase any product or service from Ampliphy, LLC — including but not limited to courses, ebooks, workshops, training programs, digital downloads, templates, community memberships, or coaching — you are purchasing a digital product. Access is granted immediately upon purchase.</p>
        <p><strong>Because of the instant-access nature of our digital products, all sales are final. We do not offer refunds, exchanges, or credits under any circumstances.</strong></p>
        <p>By completing your purchase, you acknowledge that you have read and agree to this Refund Policy, and that you understand no refund will be issued regardless of whether you access, use, or complete the product.</p>

        <hr />
        <h2>NO REFUNDS WILL BE ISSUED FOR ANY OF THE FOLLOWING</h2>
        <p>
          — Change of mind or buyer&apos;s remorse<br />
          — Failure to access or use the product after purchase<br />
          — Dissatisfaction with the content, style, or format of the product<br />
          — Failure to achieve desired results<br />
          — Accidental purchase<br />
          — Financial hardship or inability to complete a payment plan<br />
          — Technical issues caused by your own device, browser, internet connection, or third-party software<br />
          — Duplicate purchases (except as described below)<br />
          — Not having read the product description prior to purchase<br />
          — Removal from a product or community due to violation of our <a href="https://thestevenmellor.com/acceptable-use-policy">Acceptable Use Policy</a> or <a href="https://thestevenmellor.com/terms-and-conditions">Terms &amp; Conditions</a>
        </p>

        <hr />
        <h2>THE ONE EXCEPTION</h2>
        <p>The only circumstance under which a refund may be considered is if a verifiable technical error on our part — not related to your device, browser, or internet connection — prevents you from accessing a product you purchased, and we are unable to resolve that access issue within a reasonable timeframe.</p>
        <p>To be considered for a refund under this exception, you must:</p>
        <p>
          1. Contact us at <a href="mailto:hello@thestevenmellor.com">hello@thestevenmellor.com</a> within <strong>30 days</strong> of your purchase date<br />
          2. Provide your order details and a clear description of the access issue<br />
          3. Allow us a reasonable opportunity to diagnose and resolve the issue before a refund is considered
        </p>
        <p>We will make the final determination as to whether a refund is warranted under this exception. Simply being dissatisfied with the product does not constitute a technical access failure.</p>

        <hr />
        <h2>DUPLICATE PURCHASES</h2>
        <p>If you accidentally purchase the same product twice due to a verified technical fault (not a genuine second order), please contact us within 7 days at <a href="mailto:hello@thestevenmellor.com">hello@thestevenmellor.com</a> with your order details and we will review the situation. Genuine duplicate orders by the same person are not eligible for a refund.</p>

        <hr />
        <h2>PAYMENT PLANS</h2>
        <p>If you purchased a product using a payment plan, you are fully obligated to complete all scheduled payments regardless of whether you continue to use or access the product. Ceasing to use a product does not cancel your payment plan or release you from the remaining balance owed.</p>
        <p>Failure to complete scheduled payments may result in suspension or termination of access, referral to a collection agency, negative reporting to credit agencies where applicable, and legal action to recover the outstanding balance.</p>

        <hr />
        <h2>CONDUCT-BASED REMOVAL</h2>
        <p>If your access to any Ampliphy, LLC product or community is terminated as a result of a violation of our <a href="https://thestevenmellor.com/acceptable-use-policy">Acceptable Use Policy</a> or <a href="https://thestevenmellor.com/terms-and-conditions">Terms &amp; Conditions</a> — including but not limited to abusive behavior, public disparagement of Ampliphy, LLC or Steve Mellor, harassment of community members, or unauthorized sharing of paid content — <strong>no refund will be issued under any circumstances.</strong></p>
        <p>This applies regardless of how recently you purchased, how much of the product you have accessed, or how much time remains on any membership or access period.</p>

        <hr />
        <h2>CHARGEBACKS</h2>
        <p>Initiating a chargeback or payment dispute with your bank or payment processor without first contacting us is considered a violation of our <a href="https://thestevenmellor.com/terms-and-conditions">Terms &amp; Conditions</a>. If you have a concern about a charge, please contact us first at <a href="mailto:hello@thestevenmellor.com">hello@thestevenmellor.com</a> and we will do our best to resolve it.</p>
        <p>Unauthorized chargebacks may result in immediate termination of access to all products, reporting to chargeback prevention databases, and legal action to recover the disputed amount plus associated fees and costs.</p>

        <hr />
        <h2>QUESTIONS</h2>
        <p>If you have a question about a charge or need help with access to something you&apos;ve purchased, we&apos;re always happy to help. Reach out before assuming the worst — most issues are solvable.</p>
        <p>
          <strong>Ampliphy, LLC</strong><br />
          Attn: Steve Mellor<br />
          11 A Street, Derry, NH 03038<br />
          Email: <a href="mailto:hello@thestevenmellor.com">hello@thestevenmellor.com</a><br />
          Website: <a href="https://thestevenmellor.com">https://thestevenmellor.com</a>
        </p>
        <p>We strive to respond within 2–3 business days.</p>
      </article>
    </main>
  );
}

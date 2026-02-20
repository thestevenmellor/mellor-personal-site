"use client";

import { useState } from "react";
import Image from "next/image";
import "./page.css";

const products = [
  {
    name: "Sales on Autopilot: The Manychat mastery course",
    description: "The exact ManyChat flows, content swipe files, and email sequences behind $5M+ in creator revenue. Built for 7 & 8-figure creators. Now yours.",
    emoji: "⚡",
    href: "https://thestevenmellor.thrivecart.com/salesonautopilot/",
    label: "GET ACCESS NOW",
  },
  {
    name: "Instagram StoriesGPT",
    description: "Stop winging your Stories. The 5R Framework plans your entire week of revenue-focused content in 10 minutes ",
    emoji: "📱",
    href: "https://chatgpt.com/g/g-6823ad76a9f08191b59c71735c756c7c-daily-story-sales-gpt",
    label: "FREE ACCESS",
    stat: "1k+ downloads",
  }
  // ,
  // {
  //   name: "Product Three",
  //   description: "A short description of what this product does and who it's for.",
  //   emoji: "🔍",
  //   href: "#",
  //   label: "Live",
  // },
  // {
  //   name: "Secret Project",
  //   description: "Something exciting is in the works. Stay tuned.",
  //   emoji: "?",
  //   href: "#",
  //   label: "Soon",
  // },
];

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/thestevenmellor",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Threads",
    href: "https://threads.com/@thestevenmellor",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@thestevenmellor",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@thestevenmellor",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're in! Check your inbox.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  return (
    <main className="page">

      {/* Nav */}
      <nav className="nav">
        <div className="avatar">
          <Image src="/mellor-headshot.jpg" alt="Steven Mellor" width={40} height={40} />
        </div>
        <div>
          <p className="nav-name">Steven Mellor</p>
          <p className="nav-role">Solopreneur</p>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>Building marketing automation systems for creators.</h1>
        <p>Built a 7-figure creator business using marketing, AI, and automation. Now I document every system I build so you can do the same. <br /><br />Grab the first lesson today 👇</p>

        <form className="form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading" || status === "success"}
          />
          <button type="submit" disabled={status === "loading" || status === "success"}>
            {status === "loading" ? "Joining..." : status === "success" ? "Joined!" : "Join 15K+ Others"}
          </button>
        </form>

        {status !== "idle" && status !== "loading" && (
          <p className={`form-message ${status}`}>{message}</p>
        )}

        <p className="form-hint">1 lesson every week. Unsubscribe anytime.</p>
      </section>

      {/* Products */}
      <section className="products">
        <p className="products-label">Products</p>
        <div className="product-grid">
          {products.map((product) => (
            <a key={product.name} href={product.href} className="product-card">
              <div className="product-card-header">
                <span className="product-emoji">{product.emoji}</span>
                <span className={`product-badge ${product.label === "Live" ? "live" : ""}`}>
                  {product.label}
                </span>
              </div>
              <p className="product-name">{product.name}</p>
              {product.stat && <p className="product-stat">{product.stat}</p>}
              <p className="product-description">{product.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-identity">
          <div className="avatar">
            <Image src="/mellor-headshot.jpg" alt="Steven Mellor" width={40} height={40} />
          </div>
          <p className="nav-name">Steven Mellor</p>
        </div>
        <p className="footer-bio">
          Building in public and sharing what works. Follow along on the journey from side project to self-sustaining business.
        </p>
        <div className="socials">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={s.name}>
              {s.icon}
            </a>
          ))}
        </div>
        <p className="copyright">© {new Date().getFullYear()} Steven Mellor. All rights reserved.</p>
      </footer>

    </main>
  );
}

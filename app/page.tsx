"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  {
    name: "Product One",
    description:
      "A short description of what this product does and who it's for.",
    emoji: "⚡",
    href: "#",
    label: "Live",
  },
  {
    name: "Product Two",
    description:
      "A short description of what this product does and who it's for.",
    emoji: "📄",
    href: "#",
    label: "Live",
    stat: "10K+ customers",
  },
  {
    name: "Product Three",
    description:
      "A short description of what this product does and who it's for.",
    emoji: "🔍",
    href: "#",
    label: "Live",
  },
  {
    name: "Secret Project",
    description: "Something exciting is in the works. Stay tuned.",
    emoji: "?",
    href: "#",
    label: "Soon",
  },
];

const socials = [
  {
    name: "X",
    href: "https://x.com/stevenmellor",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/stevenmellor",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@stevenmellor",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
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
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="flex items-center gap-3 px-6 py-5 max-w-2xl mx-auto">
        <div className="w-10 h-10 rounded-full bg-neutral-700 overflow-hidden flex-shrink-0">
          <Image
            src="/avatar.png"
            alt="Steven Mellor"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-sm leading-tight">Steven Mellor</p>
          <p className="text-neutral-400 text-xs">Solopreneur</p>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-16 max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6">
          Building Digital Product Businesses, Sharing the Process With Others
        </h1>
        <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
          Turning my knowledge into digital product businesses that sell
          themselves — and documenting every step so you can do the same.
        </p>

        {/* Newsletter form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
          >
            {status === "loading"
              ? "Joining..."
              : status === "success"
                ? "Joined!"
                : "Join Free"}
          </button>
        </form>

        {status !== "idle" && status !== "loading" && (
          <p
            className={`mt-3 text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}
          >
            {message}
          </p>
        )}

        <p className="text-neutral-500 text-sm mt-4">
          1 lesson every week. Unsubscribe anytime.
        </p>
      </section>

      {/* Products */}
      <section className="px-6 pb-20 max-w-2xl mx-auto">
        <h2 className="text-neutral-500 text-sm uppercase tracking-widest mb-6">
          Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              className="group block bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-600 transition-all hover:opacity-80"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{product.emoji}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    product.label === "Soon"
                      ? "bg-neutral-800 text-neutral-400"
                      : "bg-neutral-800 text-neutral-300"
                  }`}
                >
                  {product.label}
                </span>
              </div>
              <p className="font-semibold mb-1">{product.name}</p>
              {product.stat && (
                <p className="text-xs text-neutral-500 mb-1">{product.stat}</p>
              )}
              <p className="text-neutral-400 text-sm leading-relaxed">
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-6 py-10 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-neutral-700 overflow-hidden flex-shrink-0">
            <Image
              src="/avatar.png"
              alt="Steven Mellor"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-sm">Steven Mellor</p>
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
          Building in public and sharing what works. Follow along on the journey
          from side project to self-sustaining business.
        </p>
        <div className="flex items-center gap-4 mb-8">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p className="text-neutral-600 text-xs">
          © {new Date().getFullYear()} Steven Mellor
        </p>
      </footer>
    </main>
  );
}

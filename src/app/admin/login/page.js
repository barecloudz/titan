"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Ambient glow effects */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-1/4 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/4 blur-[100px] pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="w-full max-w-md relative z-10">

        {/* Logo block */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              {/* Gold ring around logo */}
              <div className="absolute inset-0 rounded-full border border-[#C9A84C]/30 scale-110" />
              <div className="w-20 h-20 rounded-full bg-[#111111] border border-[#C9A84C]/20 flex items-center justify-center shadow-[0_0_40px_rgba(201,168,76,0.15)]">
                <Image
                  src="/logo-new.jpg"
                  alt="Titan Project Solutions"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain rounded-full"
                />
              </div>
            </div>
          </div>
          <h1
            className="text-white text-2xl font-black uppercase tracking-[6px] mb-2"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Titan
          </h1>
          <p className="text-[#C9A84C] text-[9px] font-bold uppercase tracking-[5px]">Operations Center</p>
        </div>

        {/* Card */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #1a1a1a 0%, #111111 100%)",
            boxShadow: "0 0 0 1px rgba(201,168,76,0.15), 0 25px 60px rgba(0,0,0,0.6), 0 0 80px rgba(201,168,76,0.04)",
          }}
        >
          {/* Gold top border shimmer */}
          <div
            className="h-px w-full"
            style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
          />

          <div className="px-8 py-8">
            <p className="text-gray-500 text-xs uppercase tracking-[3px] mb-6">Sign in to continue</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-[2px] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  placeholder="admin@example.com"
                  className="w-full rounded-lg text-white text-sm px-4 py-3.5 placeholder-gray-700 focus:outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "rgba(201,168,76,0.6)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                />
              </div>

              <div>
                <label className="block text-gray-400 text-[10px] font-bold uppercase tracking-[2px] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••••"
                  className="w-full rounded-lg text-white text-sm px-4 py-3.5 placeholder-gray-700 focus:outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "rgba(201,168,76,0.6)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-400 text-xs">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="relative w-full rounded-lg py-3.5 font-black text-sm uppercase tracking-[3px] transition-all duration-200 overflow-hidden group disabled:opacity-60"
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
                  backgroundSize: "200% 100%",
                  color: "#000",
                  boxShadow: "0 4px 20px rgba(201,168,76,0.3), 0 1px 0 rgba(255,255,255,0.2) inset",
                }}
              >
                <span className="relative z-10">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Signing in...
                    </span>
                  ) : "Access Dashboard"}
                </span>
              </button>
            </form>
          </div>

          {/* Gold bottom border shimmer */}
          <div
            className="h-px w-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }}
          />
        </div>

        {/* Footer */}
        <p className="text-center text-gray-700 text-[10px] uppercase tracking-[3px] mt-8">
          Titan Project Solutions &nbsp;&middot;&nbsp; Massapequa, NY
        </p>
      </div>
    </div>
  );
}

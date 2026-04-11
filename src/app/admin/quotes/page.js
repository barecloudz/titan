"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const statusColors = {
  draft: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  sent: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  accepted: "bg-green-500/20 text-green-400 border-green-500/30",
  declined: "bg-red-500/20 text-red-400 border-red-500/30",
  expired: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

export default function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setQuotes(data ?? []);
        setLoading(false);
      });
  }, []);

  async function updateStatus(id, status) {
    await supabase.from("quotes").update({ status }).eq("id", id);
    setQuotes((prev) => prev.map((q) => (q.id === id ? { ...q, status } : q)));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white uppercase tracking-wide">Quotes</h1>
          <p className="text-gray-500 text-sm mt-1">{quotes.length} total quotes</p>
        </div>
        <Link
          href="/admin/quotes/new"
          className="bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-bold text-xs px-4 py-2 rounded uppercase tracking-widest transition-colors"
        >
          + New Quote
        </Link>
      </div>

      <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-lg overflow-hidden">
        {loading ? (
          <p className="text-gray-500 text-sm p-6">Loading...</p>
        ) : quotes.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-gray-500 text-sm mb-4">No quotes yet.</p>
            <Link href="/admin/quotes/new" className="text-[#C9A84C] text-sm hover:text-[#E8C96A]">
              Create your first quote
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-500 text-xs font-semibold uppercase tracking-wider px-5 py-3">Quote #</th>
                  <th className="text-left text-gray-500 text-xs font-semibold uppercase tracking-wider px-5 py-3">Customer</th>
                  <th className="text-left text-gray-500 text-xs font-semibold uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Service</th>
                  <th className="text-left text-gray-500 text-xs font-semibold uppercase tracking-wider px-5 py-3">Total</th>
                  <th className="text-left text-gray-500 text-xs font-semibold uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {quotes.map((quote) => (
                  <tr key={quote.id} className="hover:bg-white/3 transition-colors">
                    <td className="px-5 py-3 text-[#C9A84C] font-mono text-xs">{quote.quote_number}</td>
                    <td className="px-5 py-3">
                      <p className="text-white font-medium">{quote.customer_name}</p>
                      <p className="text-gray-500 text-xs">{quote.customer_phone}</p>
                    </td>
                    <td className="px-5 py-3 text-gray-400 hidden sm:table-cell">{quote.service}</td>
                    <td className="px-5 py-3 text-white font-bold">
                      ${Number(quote.total).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-5 py-3">
                      <select
                        value={quote.status}
                        onChange={(e) => updateStatus(quote.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded border font-semibold capitalize bg-transparent focus:outline-none ${statusColors[quote.status] ?? "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}
                      >
                        {["draft", "sent", "accepted", "declined", "expired"].map((s) => (
                          <option key={s} value={s} className="bg-[#111111] text-white">{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-5 py-3">
                      <Link
                        href={`/admin/quotes/${quote.id}`}
                        className="text-[#C9A84C] text-xs hover:text-[#E8C96A]"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

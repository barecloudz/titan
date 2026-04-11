"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

const statusColors = {
  draft: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  sent: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  accepted: "bg-green-500/20 text-green-400 border-green-500/30",
  declined: "bg-red-500/20 text-red-400 border-red-500/30",
  expired: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

export default function QuoteDetailPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    supabase
      .from("quotes")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => {
        setQuote(data);
        setLoading(false);
      });
  }, [id]);

  async function updateStatus(status) {
    await supabase.from("quotes").update({ status }).eq("id", id);
    setQuote((prev) => ({ ...prev, status }));
  }

  if (loading) return <p className="text-gray-500 text-sm">Loading...</p>;
  if (!quote) return <p className="text-gray-500 text-sm">Quote not found.</p>;

  const items = Array.isArray(quote.items) ? quote.items : [];

  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-[#C9A84C] font-mono text-sm">{quote.quote_number}</p>
          <h1 className="text-2xl font-black text-white uppercase tracking-wide">{quote.customer_name}</h1>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={quote.status}
            onChange={(e) => updateStatus(e.target.value)}
            className={`text-xs px-3 py-1.5 rounded border font-semibold capitalize bg-transparent focus:outline-none ${statusColors[quote.status]}`}
          >
            {["draft", "sent", "accepted", "declined", "expired"].map((s) => (
              <option key={s} value={s} className="bg-[#111111] text-white">{s}</option>
            ))}
          </select>
          <button
            onClick={() => window.print()}
            className="bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-bold text-xs px-4 py-2 rounded uppercase tracking-widest transition-colors"
          >
            Print / PDF
          </button>
        </div>
      </div>

      {/* Printable quote */}
      <div id="quote-print" className="bg-[#111111] border border-[#C9A84C]/20 rounded-lg overflow-hidden print:border-0 print:rounded-none print:shadow-none">
        {/* Quote header */}
        <div className="bg-[#0a0a0a] border-b border-[#C9A84C]/30 px-8 py-6 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <Image src="/logo-new.jpg" alt="Titan Project Solutions" width={130} height={50} className="h-10 w-auto object-contain mb-3" />
            <p className="text-gray-500 text-xs">Massapequa, NY - Licensed & Insured</p>
            <p className="text-gray-500 text-xs">516-557-4933</p>
          </div>
          <div className="text-right">
            <p className="text-[#C9A84C] font-mono font-bold text-lg">{quote.quote_number}</p>
            <p className="text-gray-500 text-xs mt-1">Date: {new Date(quote.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
            {quote.valid_until && (
              <p className="text-gray-500 text-xs">Valid until: {new Date(quote.valid_until).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
            )}
          </div>
        </div>

        {/* Customer / service */}
        <div className="px-8 py-5 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Bill To</p>
            <p className="text-white font-bold">{quote.customer_name}</p>
            {quote.address && <p className="text-gray-400 text-sm">{quote.address}</p>}
            {quote.customer_phone && <p className="text-gray-400 text-sm">{quote.customer_phone}</p>}
            {quote.customer_email && <p className="text-gray-400 text-sm">{quote.customer_email}</p>}
          </div>
          {quote.service && (
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Service</p>
              <p className="text-white font-bold">{quote.service}</p>
            </div>
          )}
        </div>

        {/* Line items */}
        <div className="px-8 py-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#C9A84C]/30">
                <th className="text-left text-[#C9A84C] text-xs font-bold uppercase tracking-wider pb-2">Description</th>
                <th className="text-center text-[#C9A84C] text-xs font-bold uppercase tracking-wider pb-2 w-16">Qty</th>
                <th className="text-right text-[#C9A84C] text-xs font-bold uppercase tracking-wider pb-2 w-24">Unit Price</th>
                <th className="text-right text-[#C9A84C] text-xs font-bold uppercase tracking-wider pb-2 w-24">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td className="py-3 text-gray-200">{item.description}</td>
                  <td className="py-3 text-gray-400 text-center">{item.quantity}</td>
                  <td className="py-3 text-gray-400 text-right">${parseFloat(item.unit_price || 0).toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                  <td className="py-3 text-white font-medium text-right">
                    ${((parseFloat(item.unit_price) || 0) * (parseInt(item.quantity) || 0)).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-[#C9A84C]/40">
                <td colSpan={3} className="pt-4 text-[#C9A84C] font-black uppercase tracking-wider text-right pr-4">Total</td>
                <td className="pt-4 text-[#C9A84C] font-black text-xl text-right">
                  ${Number(quote.total).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Notes */}
        {quote.notes && (
          <div className="px-8 py-5 border-t border-white/10">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Notes</p>
            <p className="text-gray-300 text-sm whitespace-pre-wrap">{quote.notes}</p>
          </div>
        )}

        {/* Footer */}
        <div className="bg-[#0a0a0a] border-t border-[#C9A84C]/20 px-8 py-4 text-center">
          <p className="text-gray-600 text-xs">Titan Project Solutions - Quality Work. Done Right. - 516-557-4933</p>
        </div>
      </div>

      <button
        onClick={() => router.back()}
        className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
      >
        Back to quotes
      </button>
    </div>
  );
}

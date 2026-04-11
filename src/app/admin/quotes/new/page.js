"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const serviceOptions = [
  "Roofing",
  "Siding",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Pavers & Hardscape",
  "Home Renovations",
  "Dumpster Rental",
  "Demolition & Clean-outs",
  "Other",
];

const emptyItem = { description: "", quantity: 1, unit_price: "" };

export default function NewQuotePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    address: "",
    service: "",
    notes: "",
    valid_until: "",
  });
  const [items, setItems] = useState([{ ...emptyItem }]);

  function updateForm(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function updateItem(idx, key, value) {
    setItems((prev) => prev.map((item, i) => (i === idx ? { ...item, [key]: value } : item)));
  }

  function addItem() {
    setItems((prev) => [...prev, { ...emptyItem }]);
  }

  function removeItem(idx) {
    setItems((prev) => prev.filter((_, i) => i !== idx));
  }

  const subtotal = items.reduce((sum, item) => {
    return sum + (parseFloat(item.unit_price) || 0) * (parseInt(item.quantity) || 0);
  }, 0);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);

    const supabase = createClient();

    // Generate quote number
    const { count } = await supabase.from("quotes").select("id", { count: "exact", head: true });
    const num = String((count ?? 0) + 1).padStart(3, "0");
    const year = new Date().getFullYear();
    const quote_number = `TPS-${year}-${num}`;

    const cleanItems = items.filter((i) => i.description.trim());

    const { data, error } = await supabase.from("quotes").insert({
      quote_number,
      ...form,
      items: cleanItems,
      subtotal,
      total: subtotal,
      status: "draft",
    }).select().single();

    if (error) {
      alert("Error saving quote: " + error.message);
      setSaving(false);
      return;
    }

    router.push(`/admin/quotes/${data.id}`);
  }

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white uppercase tracking-wide">New Quote</h1>
        <p className="text-gray-500 text-sm mt-1">Create a new estimate for a customer.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer info */}
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-lg p-5 space-y-4">
          <h2 className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Customer Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Full Name *", key: "customer_name", type: "text", required: true, placeholder: "John Smith" },
              { label: "Phone *", key: "customer_phone", type: "tel", required: true, placeholder: "(516) 555-0100" },
              { label: "Email", key: "customer_email", type: "email", required: false, placeholder: "john@example.com" },
              { label: "Address", key: "address", type: "text", required: false, placeholder: "142 Sunrise Hwy, Massapequa NY" },
            ].map(({ label, key, type, required, placeholder }) => (
              <div key={key}>
                <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">{label}</label>
                <input
                  type={type}
                  value={form[key]}
                  onChange={(e) => updateForm(key, e.target.value)}
                  required={required}
                  placeholder={placeholder}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white placeholder-gray-600 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Service</label>
              <select
                value={form.service}
                onChange={(e) => updateForm("service", e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              >
                <option value="">Select...</option>
                {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Valid Until</label>
              <input
                type="date"
                value={form.valid_until}
                onChange={(e) => updateForm("valid_until", e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Line items */}
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-lg p-5 space-y-4">
          <h2 className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Line Items</h2>
          <div className="space-y-3">
            {items.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className="flex-1">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateItem(idx, "description", e.target.value)}
                    placeholder="Description (e.g. Architectural shingles - labor & materials)"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white placeholder-gray-600 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>
                <div className="w-16 shrink-0">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateItem(idx, "quantity", e.target.value)}
                    min="1"
                    placeholder="Qty"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white placeholder-gray-600 px-3 py-2.5 text-sm text-center focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>
                <div className="w-28 shrink-0">
                  <input
                    type="number"
                    value={item.unit_price}
                    onChange={(e) => updateItem(idx, "unit_price", e.target.value)}
                    placeholder="Price"
                    min="0"
                    step="0.01"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white placeholder-gray-600 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>
                <div className="w-24 shrink-0 flex items-center justify-end">
                  <span className="text-white text-sm font-medium">
                    ${((parseFloat(item.unit_price) || 0) * (parseInt(item.quantity) || 0)).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeItem(idx)}
                    className="text-gray-600 hover:text-red-400 pt-2.5 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addItem}
            className="text-[#C9A84C] hover:text-[#E8C96A] text-sm font-medium transition-colors"
          >
            + Add line item
          </button>

          {/* Total */}
          <div className="border-t border-white/10 pt-4 flex justify-end">
            <div className="text-right">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total</p>
              <p className="text-[#C9A84C] text-2xl font-black">
                ${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-lg p-5">
          <label className="block text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-3">Notes</label>
          <textarea
            value={form.notes}
            onChange={(e) => updateForm("notes", e.target.value)}
            rows={3}
            placeholder="Any additional notes, terms, or conditions..."
            className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white placeholder-gray-600 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="bg-[#C9A84C] hover:bg-[#E8C96A] disabled:opacity-50 text-black font-black text-sm px-6 py-3 rounded uppercase tracking-widest transition-colors"
          >
            {saving ? "Saving..." : "Save Quote"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-white/5 hover:bg-white/10 text-gray-300 font-semibold text-sm px-6 py-3 rounded uppercase tracking-wide transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

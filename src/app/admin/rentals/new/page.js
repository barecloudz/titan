"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const dumpsterSizes = ["10-Yard", "15-Yard", "20-Yard", "30-Yard", "40-Yard"];

export default function NewRentalPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    address: "",
    dumpster_size: "10-Yard",
    quantity: 1,
    delivery_date: "",
    pickup_date: "",
    price_per_unit: "",
    notes: "",
  });

  function updateForm(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const total = (parseFloat(form.price_per_unit) || 0) * (parseInt(form.quantity) || 1);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);

    const supabase = createClient();

    const { count } = await supabase.from("rentals").select("id", { count: "exact", head: true });
    const num = String((count ?? 0) + 1).padStart(3, "0");
    const year = new Date().getFullYear();
    const rental_number = `TPS-R-${year}-${num}`;

    const { error } = await supabase.from("rentals").insert({
      rental_number,
      ...form,
      quantity: parseInt(form.quantity),
      price_per_unit: parseFloat(form.price_per_unit) || null,
      total: total || null,
      status: "pending",
    });

    if (error) {
      alert("Error: " + error.message);
      setSaving(false);
      return;
    }

    router.push("/admin/rentals");
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white uppercase tracking-wide">New Dumpster Rental</h1>
        <p className="text-gray-500 text-sm mt-1">Book a new rental for a customer.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer */}
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-lg p-5 space-y-4">
          <h2 className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Customer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Full Name *", key: "customer_name", type: "text", required: true, placeholder: "John Smith" },
              { label: "Phone *", key: "customer_phone", type: "tel", required: true, placeholder: "(516) 555-0100" },
              { label: "Email", key: "customer_email", type: "email", required: false, placeholder: "john@example.com" },
              { label: "Delivery Address *", key: "address", type: "text", required: true, placeholder: "142 Sunrise Hwy, Massapequa NY" },
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
        </div>

        {/* Rental details */}
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-lg p-5 space-y-4">
          <h2 className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Rental Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Dumpster Size *</label>
              <select
                value={form.dumpster_size}
                onChange={(e) => updateForm("dumpster_size", e.target.value)}
                required
                className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              >
                {dumpsterSizes.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Quantity</label>
              <input
                type="number"
                value={form.quantity}
                onChange={(e) => updateForm("quantity", e.target.value)}
                min="1"
                max="10"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Delivery Date *</label>
              <input
                type="date"
                value={form.delivery_date}
                onChange={(e) => updateForm("delivery_date", e.target.value)}
                required
                className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Pickup Date *</label>
              <input
                type="date"
                value={form.pickup_date}
                onChange={(e) => updateForm("pickup_date", e.target.value)}
                required
                className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Price Per Unit ($)</label>
              <input
                type="number"
                value={form.price_per_unit}
                onChange={(e) => updateForm("price_per_unit", e.target.value)}
                min="0"
                step="0.01"
                placeholder="350.00"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white placeholder-gray-600 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
            </div>
            <div className="flex items-end">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Total</p>
                <p className="text-[#C9A84C] text-2xl font-black">
                  {total > 0 ? `$${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}` : "-"}
                </p>
              </div>
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
            placeholder="Placement instructions, access notes, etc..."
            className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white placeholder-gray-600 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="bg-[#C9A84C] hover:bg-[#E8C96A] disabled:opacity-50 text-black font-black text-sm px-6 py-3 rounded uppercase tracking-widest transition-colors"
          >
            {saving ? "Saving..." : "Book Rental"}
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

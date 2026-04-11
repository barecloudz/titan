"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const statusColors = {
  pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  confirmed: "bg-green-500/20 text-green-400 border-green-500/30",
  active: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  completed: "bg-gray-500/20 text-gray-500 border-gray-500/30",
  cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
};

const statusOptions = ["pending", "confirmed", "active", "completed", "cancelled"];

export default function RentalsPage() {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const supabase = createClient();

  useEffect(() => {
    supabase
      .from("rentals")
      .select("*")
      .order("delivery_date", { ascending: true })
      .then(({ data }) => {
        setRentals(data ?? []);
        setLoading(false);
      });
  }, []);

  async function updateStatus(id, status) {
    await supabase.from("rentals").update({ status }).eq("id", id);
    setRentals((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  }

  const filtered = filter === "all" ? rentals : rentals.filter((r) => r.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white uppercase tracking-wide">Dumpster Rentals</h1>
          <p className="text-gray-500 text-sm mt-1">{rentals.length} total rentals</p>
        </div>
        <Link
          href="/admin/rentals/new"
          className="bg-[#C9A84C] hover:bg-[#E8C96A] text-black font-bold text-xs px-4 py-2 rounded uppercase tracking-widest transition-colors"
        >
          + New Rental
        </Link>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {["all", ...statusOptions].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wide capitalize transition-colors ${
              filter === s
                ? "bg-[#C9A84C] text-black"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-lg overflow-hidden">
        {loading ? (
          <p className="text-gray-500 text-sm p-6">Loading...</p>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-gray-500 text-sm mb-4">No rentals found.</p>
            <Link href="/admin/rentals/new" className="text-[#C9A84C] text-sm hover:text-[#E8C96A]">
              Create first rental
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {filtered.map((rental) => (
              <div key={rental.id} className="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-[#C9A84C] font-mono text-xs">{rental.rental_number}</p>
                    <p className="text-white font-semibold text-sm">{rental.customer_name}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold capitalize ${statusColors[rental.status] ?? "bg-gray-500/20 text-gray-500 border-gray-500/30"}`}>
                      {rental.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">{rental.address}</p>
                  <div className="flex items-center gap-4 mt-1 flex-wrap">
                    <span className="text-gray-500 text-xs">
                      {rental.quantity}x {rental.dumpster_size}
                    </span>
                    <span className="text-gray-500 text-xs">
                      Delivery: {new Date(rental.delivery_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="text-gray-500 text-xs">
                      Pickup: {new Date(rental.pickup_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    {rental.total && (
                      <span className="text-white font-bold text-xs">
                        ${Number(rental.total).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href={`tel:${rental.customer_phone}`} className="text-[#C9A84C] text-xs hover:text-[#E8C96A]">
                    {rental.customer_phone}
                  </a>
                  <select
                    value={rental.status}
                    onChange={(e) => updateStatus(rental.id, e.target.value)}
                    className="bg-[#0a0a0a] border border-white/10 text-gray-300 text-xs rounded px-2 py-1 focus:outline-none focus:border-[#C9A84C]"
                  >
                    {statusOptions.map((s) => (
                      <option key={s} value={s} className="capitalize">{s}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

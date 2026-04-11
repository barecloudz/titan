"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const statusOptions = ["new", "contacted", "converted", "archived"];

const statusColors = {
  new: "bg-[#C9A84C]/20 text-[#C9A84C] border-[#C9A84C]/30",
  contacted: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  converted: "bg-green-500/20 text-green-400 border-green-500/30",
  archived: "bg-gray-500/20 text-gray-500 border-gray-500/30",
};

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLeads(data ?? []);
    setLoading(false);
  }

  async function updateStatus(id, status) {
    await supabase.from("leads").update({ status }).eq("id", id);
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  }

  const filtered = filter === "all" ? leads : leads.filter((l) => l.status === filter);

  const counts = statusOptions.reduce((acc, s) => {
    acc[s] = leads.filter((l) => l.status === s).length;
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white uppercase tracking-wide">Leads</h1>
          <p className="text-gray-500 text-sm mt-1">{leads.length} total inquiries</p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wide transition-colors ${
            filter === "all"
              ? "bg-[#C9A84C] text-black"
              : "bg-white/5 text-gray-400 hover:text-white"
          }`}
        >
          All ({leads.length})
        </button>
        {statusOptions.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wide capitalize transition-colors ${
              filter === s
                ? "bg-[#C9A84C] text-black"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            {s} ({counts[s] ?? 0})
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-lg overflow-hidden">
        {loading ? (
          <p className="text-gray-500 text-sm p-6">Loading...</p>
        ) : filtered.length === 0 ? (
          <p className="text-gray-500 text-sm p-6">No leads found.</p>
        ) : (
          <div className="divide-y divide-white/5">
            {filtered.map((lead) => (
              <div key={lead.id}>
                <div
                  className="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 cursor-pointer hover:bg-white/3 transition-colors"
                  onClick={() => setExpanded(expanded === lead.id ? null : lead.id)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <p className="text-white font-semibold text-sm">{lead.name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold capitalize ${statusColors[lead.status] ?? "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}>
                        {lead.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-1 flex-wrap">
                      <a href={`tel:${lead.phone}`} className="text-[#C9A84C] text-xs hover:text-[#E8C96A]" onClick={(e) => e.stopPropagation()}>
                        {lead.phone}
                      </a>
                      {lead.email && (
                        <a href={`mailto:${lead.email}`} className="text-gray-400 text-xs hover:text-white" onClick={(e) => e.stopPropagation()}>
                          {lead.email}
                        </a>
                      )}
                      <span className="text-gray-600 text-xs">{lead.service}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-xs whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                    <select
                      value={lead.status}
                      onChange={(e) => { e.stopPropagation(); updateStatus(lead.id, e.target.value); }}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-[#0a0a0a] border border-white/10 text-gray-300 text-xs rounded px-2 py-1 focus:outline-none focus:border-[#C9A84C]"
                    >
                      {statusOptions.map((s) => (
                        <option key={s} value={s} className="capitalize">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Expanded message */}
                {expanded === lead.id && lead.message && (
                  <div className="px-5 pb-4 bg-[#0a0a0a]/50">
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Message</p>
                    <p className="text-gray-300 text-sm whitespace-pre-wrap">{lead.message}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

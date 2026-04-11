import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

async function getStats(supabase) {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  const [leadsMonth, leadsNew, quotesOpen, rentalsActive, recentLeads, upcomingDeliveries] =
    await Promise.all([
      supabase.from("leads").select("id", { count: "exact", head: true }).gte("created_at", monthStart),
      supabase.from("leads").select("id", { count: "exact", head: true }).eq("status", "new"),
      supabase.from("quotes").select("id", { count: "exact", head: true }).in("status", ["draft", "sent"]),
      supabase.from("rentals").select("id", { count: "exact", head: true }).in("status", ["confirmed", "active"]),
      supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(5),
      supabase.from("rentals").select("*").in("status", ["pending", "confirmed"]).order("delivery_date", { ascending: true }).limit(5),
    ]);

  return {
    leadsMonth: leadsMonth.count ?? 0,
    leadsNew: leadsNew.count ?? 0,
    quotesOpen: quotesOpen.count ?? 0,
    rentalsActive: rentalsActive.count ?? 0,
    recentLeads: recentLeads.data ?? [],
    upcomingDeliveries: upcomingDeliveries.data ?? [],
  };
}

const statusColors = {
  new: "bg-[#C9A84C]/20 text-[#C9A84C]",
  contacted: "bg-blue-500/20 text-blue-400",
  converted: "bg-green-500/20 text-green-400",
  archived: "bg-gray-500/20 text-gray-400",
  pending: "bg-yellow-500/20 text-yellow-400",
  confirmed: "bg-green-500/20 text-green-400",
  active: "bg-blue-500/20 text-blue-400",
  completed: "bg-gray-500/20 text-gray-400",
};

export default async function AdminDashboard() {
  const supabase = await createClient();
  const stats = await getStats(supabase);

  const statCards = [
    { label: "New Leads", value: stats.leadsNew, sub: `${stats.leadsMonth} this month`, href: "/admin/leads", color: "text-[#C9A84C]" },
    { label: "Open Quotes", value: stats.quotesOpen, sub: "draft or sent", href: "/admin/quotes", color: "text-blue-400" },
    { label: "Active Rentals", value: stats.rentalsActive, sub: "pending + active", href: "/admin/rentals", color: "text-green-400" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white uppercase tracking-wide">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back. Here's what's happening.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {statCards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-[#111111] border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 rounded-lg p-5 transition-colors group"
          >
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">{card.label}</p>
            <p className={`text-4xl font-black ${card.color}`}>{card.value}</p>
            <p className="text-gray-600 text-xs mt-1">{card.sub}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent leads */}
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-lg overflow-hidden">
          <div className="px-5 py-4 border-b border-[#C9A84C]/20 flex items-center justify-between">
            <h2 className="text-white font-bold text-sm uppercase tracking-wide">Recent Leads</h2>
            <Link href="/admin/leads" className="text-[#C9A84C] text-xs hover:text-[#E8C96A]">View all</Link>
          </div>
          {stats.recentLeads.length === 0 ? (
            <p className="text-gray-500 text-sm p-5">No leads yet.</p>
          ) : (
            <div className="divide-y divide-white/5">
              {stats.recentLeads.map((lead) => (
                <div key={lead.id} className="px-5 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-medium">{lead.name}</p>
                    <p className="text-gray-500 text-xs">{lead.service} - {lead.phone}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold capitalize ${statusColors[lead.status] ?? "bg-gray-500/20 text-gray-400"}`}>
                    {lead.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Upcoming deliveries */}
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-lg overflow-hidden">
          <div className="px-5 py-4 border-b border-[#C9A84C]/20 flex items-center justify-between">
            <h2 className="text-white font-bold text-sm uppercase tracking-wide">Upcoming Deliveries</h2>
            <Link href="/admin/rentals" className="text-[#C9A84C] text-xs hover:text-[#E8C96A]">View all</Link>
          </div>
          {stats.upcomingDeliveries.length === 0 ? (
            <p className="text-gray-500 text-sm p-5">No upcoming deliveries.</p>
          ) : (
            <div className="divide-y divide-white/5">
              {stats.upcomingDeliveries.map((rental) => (
                <div key={rental.id} className="px-5 py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-white text-sm font-medium">{rental.customer_name}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold capitalize ${statusColors[rental.status] ?? "bg-gray-500/20 text-gray-400"}`}>
                      {rental.status}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{rental.address}</p>
                  <p className="text-[#C9A84C] text-xs mt-0.5">
                    Delivery: {new Date(rental.delivery_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { href: "/admin/leads", label: "View Leads" },
          { href: "/admin/quotes/new", label: "New Quote" },
          { href: "/admin/rentals/new", label: "New Rental" },
          { href: "/admin/quotes", label: "All Quotes" },
        ].map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="bg-[#111111] border border-white/10 hover:border-[#C9A84C]/40 rounded-lg px-4 py-3 text-center text-sm text-gray-300 hover:text-[#C9A84C] transition-colors font-medium"
          >
            {action.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

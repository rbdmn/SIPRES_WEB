"use client";
import React from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Bell, Settings, User, Home, List, MapPin, Type, Table } from "lucide-react";

const salesData = [
  { day: "M", value: 10 },
  { day: "T", value: 5 },
  { day: "W", value: 15 },
  { day: "T", value: 20 },
  { day: "F", value: 18 },
  { day: "S", value: 12 },
  { day: "S", value: 35 },
];

const emailData = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 350 },
  { month: "Mar", value: 200 },
  { month: "Apr", value: 600 },
  { month: "May", value: 800 },
  { month: "Jun", value: 500 },
  { month: "Jul", value: 450 },
  { month: "Aug", value: 480 },
  { month: "Sep", value: 600 },
  { month: "Oct", value: 700 },
  { month: "Nov", value: 900 },
  { month: "Dec", value: 850 },
];

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Creative Tim</h1>
        <nav className="flex flex-col space-y-3">
          <NavItem icon={<Home size={18} />} text="Dashboard" active />
          <NavItem icon={<User size={18} />} text="User Profile" />
          <NavItem icon={<Table size={18} />} text="Table List" />
          <NavItem icon={<Type size={18} />} text="Typography" />
          <NavItem icon={<List size={18} />} text="Icons" />
          <NavItem icon={<MapPin size={18} />} text="Maps" />
        </nav>
        <div className="mt-auto pt-4 border-t border-gray-700">
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md">
            Upgrade To PRO
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <Bell size={20} className="cursor-pointer" />
            <Settings size={20} className="cursor-pointer" />
            <User size={20} className="cursor-pointer" />
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard color="bg-orange-500" title="Used Space" value="49/50 GB" note="Get more space" />
          <StatCard color="bg-gray-800" title="Revenue" value="$34,245" note="Last 24 Hours" />
          <StatCard color="bg-red-500" title="Fixed Issues" value="75" note="Tracked from Github" />
          <StatCard color="bg-cyan-500" title="Followers" value="+245" note="Just Updated" />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ChartCard title="Daily Sales" note="55% increase in today sales.">
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#4ade80" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Email Subscriptions" note="Last Campaign Performance">
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={emailData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Completed Tasks" note="Last Campaign Performance">
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#0f172a" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </main>
    </div>
  );
}

// Reusable Components
function NavItem({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer ${
        active ? "bg-blue-600" : "hover:bg-gray-700"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}

function StatCard({ color, title, value, note }: { color: string; title: string; value: string; note: string }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${color}`}>
        <span className="text-xl font-bold">⧉</span>
      </div>
      <div className="mt-2 text-gray-500 text-sm">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs text-gray-400 mt-auto">{note}</div>
    </div>
  );
}

function ChartCard({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
      <div className="text-lg font-semibold mb-2">{title}</div>
      <div className="flex-1">{children}</div>
      <div className="text-xs text-gray-500 mt-2">{note}</div>
    </div>
  );
}

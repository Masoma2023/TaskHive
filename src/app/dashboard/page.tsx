import Charts from '@/components/dashboard/Charts';
import OnGoingTask from '@/components/dashboard/OnGoingTask';
import SideBarDashboard from '@/components/dashboard/SideBarDashboard';
import SummaryCards from '@/components/dashboard/SummaryCards';
import TaskState from '@/components/dashboard/TaskState';
import TopBarDashboard from '@/components/dashboard/TopBarDashboard';
import React from 'react';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow flex flex-col">
        <SideBarDashboard />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Top bar */}
        <header className="mb-6">
          <TopBarDashboard />
        </header>

        {/* Greeting */}
        <h1 className="text-2xl font-semibold mb-6">Hi, Seddiqa 👋</h1>

        {/* Summary cards */}
        <div className="grid lg:grid-cols-4 gap-4 mb-6 md:grid-cols-2 grid-cols-2">
          <SummaryCards />
        </div>

        {/* Main grid with ongoing tasks and charts */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <OnGoingTask />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-6">
            <div className="grid col-span-2 md:grid-cols-2 gap-6 items-center relative">
              <div className="grid col-span-1">
                <h2 className="text-2xl text-slate-800 font-semibold">Task by day</h2>
                <p className="text-slate-500">Showing task creation per day in this month</p>
              </div>
              <select className="px-4 py-2 rounded md:grid border w-40 focus:outline-0 cursor-pointer border-gray-300 col-span-1 absolute right-0 bg-white">
                <option value="Junuary">Junuary</option>
                <option value="Febreuary">Febreuary</option>
                <option value="May">May</option>
              </select>
            </div>
            <div className="col-span-2">
              <Charts />
            </div>
            <div className="col-span-2">
              <TaskState />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

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
        <div className="grid lg:grid-cols-4 gap-4 mb-6 md:grid-cols-2">
          <SummaryCards />
        </div>

        {/* Main grid with ongoing tasks and charts */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <OnGoingTask />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-6">
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

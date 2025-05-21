'use client';

import { BarChart2, ClipboardList, Home, LogOut, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: 'Dashboard', icon: <Home size={18} />, href: '/' },
  { label: 'My tasks', icon: <ClipboardList size={18} />, href: '/ongoingtask' },
  { label: 'Status', icon: <BarChart2 size={18} />, href: '/TaskState' },
  { label: 'Add task', icon: <Plus size={18} />, href: '/Charts' },
];

export default function SideBarDashboard() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Image
            src="/slides-image/person1.jpg"
            height={400}
            width={400}

            alt="Profile"
            className="w-10 h-10 rounded-full bg-orange-600 object-cover"
          />
          <div className="font-medium">Sediqa</div>
        </div>

        <hr className="mb-4" />

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                  isActive ? 'bg-slate-400 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div>
        <hr className="my-4" />
        <Link
          href="/logout"
          className="flex items-center gap-2 text-slate-600 hover:bg-slate-100 px-4 py-2 rounded-md"
        >
          <LogOut size={18} />
          Log out
        </Link>
      </div>
    </aside>
  );
}

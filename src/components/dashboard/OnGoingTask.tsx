'use client';
import { useState } from 'react';

type Task = {
  id: number;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  date: string;
  status: 'To Do' | 'In Progress' | 'Done';
};

const tasks: Task[] = [
  {
    id: 1,
    title: 'Design Home page',
    description: 'Create the hero section, feature highlights...',
    priority: 'Low',
    date: 'Jul 24',
    status: 'To Do',
  },
  {
    id: 2,
    title: 'Fix bugs in signup flow',
    description: 'Resolve reported issues in the sign-up process...',
    priority: 'Medium',
    date: 'Jul 24',
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Integrate Task Filters',
    description: 'Add filtering options to the task list by status...',
    priority: 'High',
    date: 'Jul 24',
    status: 'Done',
  },
  {
    id: 4,
    title: 'Test Notification System',
    description: 'Check the behavior of in-app and email notifications...',
    priority: 'High',
    date: 'Jul 24',
    status: 'Done',
  },
  {
    id: 5,
    title: 'Improve Loading Speed',
    description: 'Optimize app loading times for better UX...',
    priority: 'High',
    date: 'Jul 24',
    status: 'Done',
  },
  {
    id: 6,
    title: 'Improve Loading Speed',
    description: 'Optimize app loading times for better UX...',
    priority: 'High',
    date: 'Jul 24',
    status: 'Done',
  },
  {
    id: 7,
    title: 'Improve Loading Speed',
    description: 'Optimize app loading times for better UX...',
    priority: 'High',
    date: 'Jul 24',
    status: 'Done',
  },
  {
    id: 8,
    title: 'Improve Loading Speed',
    description: 'Optimize app loading times for better UX...',
    priority: 'High',
    date: 'Jul 24',
    status: 'Done',
  },
];

export default function TaskBoard() {
  const [activeTab, setActiveTab] = useState<'All' | 'To Do' | 'In Progress' | 'Done'>('All');

  const filteredTasks = () => {
    if (activeTab === 'All') {
      return tasks;
    }
    if (activeTab === 'To Do') {
      return tasks.filter(task => task.status === 'To Do');
    }
    if (activeTab === 'In Progress') {
      return tasks.filter(task => task.status === 'In Progress');
    }
    if (activeTab === 'Done') {
      return tasks.filter(task => task.status === 'Done');
    }
    return tasks;
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-amber-50 rounded shadow-lg font-sans border border-gray-300">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">Ongoing tasks</h3>
      {/* Tabs */}
      <div className="flex space-x-2 mb-4">
        {['All', 'To Do', 'In Progress', 'Done'].map(tab => (
          <button
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab as typeof activeTab)}
            className={`px-3 py-1 rounded text-xs ${
              activeTab === tab
                ? 'bg-sky-900 cursor-pointer text-white'
                : 'bg-transparent border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Task List */}
      <ul className="space-y-3 h-[595px] overflow-y-scroll scrollbar-hide">
        {filteredTasks().map(task => (
          <li key={task.id} className="rounded p-3 shadow-sm bg-white">
            {/* Title + Priority Badge */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-slate-700">{task.title}</h3>
              <span
                className={`px-4 py-0.5 rounded text-xs ${
                  task.priority === 'Low'
                    ? 'bg-green-500 px-2 text-white'
                    : task.priority === 'Medium'
                      ? 'bg-amber-400 text-white'
                      : 'bg-red-500 text-white'
                }`}
              >
                {task.priority}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-2">{task.description}</p>

            {/* Status Badge & Date */}
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div>
              </div>
              <div>{task.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

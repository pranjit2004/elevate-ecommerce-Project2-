"use client";

import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Settings, 
  LogOut, 
  User, 
  CreditCard,
  ArrowUpRight
} from 'lucide-react';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Show a spinner while NextAuth checks if the user is logged in
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-black dark:border-white"></div>
      </div>
    );
  }

  // Security: If they aren't logged in, kick them back to the login page
  if (status === "unauthenticated") {
    router.push('/api/auth/signin');
    return null;
  }

  const stats = [
    { label: 'Total Spent', value: '$1,284.00', icon: CreditCard, change: '+12.5%' },
    { label: 'Active Orders', value: '3', icon: ShoppingBag, change: '0%' },
    { label: 'Saved Items', value: '12', icon: User, change: '+2' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex flex-col md:flex-row">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 flex flex-col border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-6">
        <div className="flex items-center gap-3 mb-10 hidden md:flex">
          <div className="h-10 w-10 rounded-xl bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold">
            E
          </div>
          <span className="font-bold text-xl dark:text-white">Elevate</span>
        </div>

        <nav className="flex-1 space-y-2 mb-8 md:mb-0">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium transition-all">
            <LayoutDashboard className="h-5 w-5" />
            Overview
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all">
            <ShoppingBag className="h-5 w-5" />
            Orders
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all">
            <Settings className="h-5 w-5" />
            Settings
          </button>
        </nav>

        {/* LOGOUT BUTTON */}
        <button 
          onClick={() => signOut({ callbackUrl: '/' })}
          className="mt-auto flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all font-medium"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
              Welcome back, {session?.user?.name?.split(' ')[0] || 'User'}
            </h1>
            <p className="text-neutral-500 dark:text-neutral-400 mt-1">
              Here's what's happening with your account today.
            </p>
          </div>
          <div className="flex items-center gap-3 hidden sm:flex">
             <div className="h-12 w-12 rounded-full border-2 border-white dark:border-neutral-800 shadow-sm overflow-hidden bg-neutral-100">
                <img src={session?.user?.image || ''} alt="User" className="h-full w-full object-cover" />
             </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                  <stat.icon className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.includes('+') ? 'bg-green-100 text-green-600' : 'bg-neutral-100 text-neutral-600'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="px-6 py-5 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
            <h3 className="font-bold text-neutral-900 dark:text-white">Recent Orders</h3>
            <button className="text-sm font-medium text-neutral-500 hover:text-black dark:hover:text-white flex items-center gap-1">
              View all <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-neutral-400 bg-neutral-50/50 dark:bg-neutral-800/50">
                  <th className="px-6 py-4 font-semibold">Order ID</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {[
                  { id: '#3902', status: 'Delivered', amount: '$120.00' },
                  { id: '#3901', status: 'Processing', amount: '$54.50' },
                  { id: '#3899', status: 'Delivered', amount: '$210.00' },
                ].map((order) => (
                  <tr key={order.id} className="text-sm text-neutral-600 dark:text-neutral-300">
                    <td className="px-6 py-4 font-medium text-neutral-900 dark:text-white">{order.id}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
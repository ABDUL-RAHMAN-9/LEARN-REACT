import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Activity, LayoutGrid, Terminal, ShieldAlert, Github } from 'lucide-react';

const Layout = () =>
{
    return (
        <div className="min-h-screen flex flex-col">
            {/* Tactical Navbar */}
            <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-indigo-600 p-1.5 rounded-lg">
                            <Activity size={20} className="text-white" />
                        </div>
                        <span className="font-black text-xl tracking-tighter">ROUTING<span className="text-indigo-500">.ENGINE</span></span>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex gap-6">
                            <NavLink to="/" className={({ isActive }) => `text-sm font-bold transition-colors ${isActive ? 'text-indigo-500' : 'text-zinc-500 hover:text-white'}`}>HOME</NavLink>
                            <NavLink to="/blog" className={({ isActive }) => `text-sm font-bold transition-colors ${isActive ? 'text-indigo-500' : 'text-zinc-500 hover:text-white'}`}>TRANSMISSIONS</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => `text-sm font-bold transition-colors ${isActive ? 'text-indigo-500' : 'text-zinc-500 hover:text-white'}`}>TERMINAL</NavLink>
                        </div>
                        <a href="https://github.com/ABDUL-RAHMAN-9" target="_blank" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all">
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </nav>

            {/* Dynamic Content Area */}
            <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">
                <Outlet />
            </main>

            <footer className="py-8 border-t border-zinc-900 text-center text-zinc-600 text-[10px] tracking-[0.3em] uppercase">
                System_Status: Operational // Node_v18.2.0
            </footer>
        </div>
    );
};

export default Layout;
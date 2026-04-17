import React from 'react';
import Api from '../API/Api';

const Layout = () =>
{
    return (
        <div className="min-h-screen bg-zinc-50">
            {/* Header Section */}
            <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <h1 className="text-2xl font-black tracking-tighter text-zinc-900">
                        BLOG<span className="text-indigo-600">API.</span>
                    </h1>
                    <div className="flex gap-6 text-sm font-bold text-zinc-500">
                        <span className="hover:text-indigo-600 cursor-pointer">Explore</span>
                        <span className="hover:text-indigo-600 cursor-pointer">Documentation</span>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12">
                    <h2 className="text-4xl font-extrabold text-zinc-900 tracking-tight mb-2">
                        Developer API Registry
                    </h2>
                    <p className="text-zinc-500 text-lg">
                        A curated list of dummy text generators for high-end mockups.
                    </p>
                </div>

                <Api />
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-zinc-200 py-12 mt-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-zinc-400 text-sm font-medium">
                        © 2026 Blog System API Refactor. Built with React & Tailwind.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
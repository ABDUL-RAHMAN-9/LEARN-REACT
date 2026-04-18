import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () =>
{
    return (
        <div className="max-w-3xl">
            <h2 className="text-zinc-500 font-mono text-xs mb-4 tracking-widest uppercase">Overview // Hub_Central</h2>
            <h1 className="text-6xl font-black tracking-tighter leading-none mb-8">
                Orchestrate your <br />
                <span className="text-indigo-500">Digital Pathways.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                This engine demonstrates the power of dynamic client-side routing.
                Move through nodes without a single page refresh, maintaining state and speed
                across the entire network infrastructure.
            </p>
            <Link to="/blog" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-indigo-500 hover:text-white transition-all group">
                Explore Transmissions
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
        </div>
    );
};

export default Home;
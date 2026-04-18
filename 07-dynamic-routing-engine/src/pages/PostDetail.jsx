import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const PostDetail = () =>
{
    const { slug } = useParams();

    return (
        <div className="max-w-2xl">
            <Link to="/blog" className="flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-colors text-sm font-bold">
                <ChevronLeft size={16} /> BACK TO LOGS
            </Link>
            <h1 className="text-xs font-mono text-indigo-500 uppercase tracking-widest mb-4">Node_Analysis</h1>
            <h2 className="text-4xl font-black tracking-tighter mb-6">Details for: <span className="capitalize">{slug.replace(/-/g, ' ')}</span></h2>
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 font-mono text-sm leading-loose text-zinc-400">
                <p>// REQUESTING DATA FROM SLUG: {slug}</p>
                <p>// STATUS: STACK_LOAD_SUCCESSFUL</p>
                <p className="mt-4">
                    This content is rendered dynamically. Because the URL contains "{slug}", React Router
                    injects this value into the component, allowing for a single template to serve millions of unique paths.
                </p>
            </div>
        </div>
    );
};

export default PostDetail;
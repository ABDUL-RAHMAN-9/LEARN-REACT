import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () =>
{
    const posts = [
        { id: '01', title: "Understanding React Router v6", slug: "router-v6", type: "Docs" },
        { id: '02', title: "Dynamic Params vs Search Params", slug: "params-logic", type: "Logic" },
        { id: '03', title: "Optimizing Layout Outlets", slug: "outlet-optimization", type: "Perf" },
    ];

    return (
        <div>
            <h1 className="text-4xl font-black tracking-tighter mb-12">Latest Transmissions</h1>
            <div className="grid gap-4">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="group flex items-center justify-between p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:border-indigo-500/50 transition-all"
                    >
                        <div className="flex items-center gap-6">
                            <span className="font-mono text-zinc-700 font-bold">{post.id}</span>
                            <span className="text-xl font-bold text-zinc-300 group-hover:text-white transition-colors">{post.title}</span>
                        </div>
                        <span className="text-[10px] font-mono bg-zinc-800 px-3 py-1 rounded-md text-zinc-500">{post.type}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;
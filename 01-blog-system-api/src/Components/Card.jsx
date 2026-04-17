import React from 'react';
import { Heart, Clock, Calendar, User, ExternalLink } from 'lucide-react';

const Card = ({ image, heading, description, author, likes, date, category, readTime, url }) =>
{
    return (
        <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            {/* Image Section */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={image}
                    alt={heading}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                    {category}
                </span>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-zinc-400 text-xs mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-zinc-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {heading}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>

                {/* Footer Section */}
                <div className="mt-auto pt-6 border-t border-zinc-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs">
                            {author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-zinc-700">{author}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-zinc-400 text-xs font-bold">
                            <Heart size={14} className="text-rose-500 fill-rose-500" /> {likes}
                        </span>
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-zinc-900 text-white rounded-xl hover:bg-indigo-600 transition-colors"
                        >
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
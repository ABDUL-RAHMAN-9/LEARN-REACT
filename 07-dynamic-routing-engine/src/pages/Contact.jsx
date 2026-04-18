import React from 'react';

const Contact = () =>
{
    return (
        <div className="max-w-xl">
            <h1 className="text-4xl font-black tracking-tighter mb-8">Terminal Support</h1>
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
                <div className="space-y-4">
                    <div>
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Signal_Source</label>
                        <input type="email" placeholder="email@network.com" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl mt-2 outline-none focus:border-indigo-500" />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Message_Packet</label>
                        <textarea rows="4" placeholder="Encrypted message..." className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl mt-2 outline-none focus:border-indigo-500" />
                    </div>
                    <button className="w-full bg-indigo-600 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all">Send Transmission</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
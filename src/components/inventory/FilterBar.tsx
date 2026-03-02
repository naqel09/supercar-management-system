import {ChevronDown, SlidersHorizontal} from "lucide-react";

const filters = ["Brand", "Engine Type", "Price Range", "Drive Train"];

export default function FilterBar() {
    return (
        <div className="sticky top-20 z-40 bg-[#0a0101]/80 backdrop-blur-xl border-y border-red-900/10 py-6 px-8 mb-12">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-4">
                    <button className="bg-red-800 hover:bg-red-700 text-white px-6 py-2.5 rounded text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all">
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        All Filters
                    </button>

                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className="bg-white/5 border border-white/10 hover:border-red-900/50 hover:bg-white/10 text-white/70 px-6 py-2.5 rounded text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all"
                        >
                            {filter}
                            <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">
                        Sort By
                    </span>
                    <button className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 border-b border-transparent hover:border-red-700 transition-all">
                        Featured
                        <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}

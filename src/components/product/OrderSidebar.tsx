import {Check, ShoppingCart, Calendar, Headphones} from "lucide-react";

const features = [
    "Limited to 150 units worldwide",
    "Fully customizable livery",
    "Track-only configuration available",
];

export default function OrderSidebar() {
    return (
        <div className="bg-[#1a0505] backdrop-blur-xl p-8 rounded-3xl border border-red-900 shadow-2xl flex flex-col items-start relative overflow-hidden">
            {/* Visual Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-800/5 blur-[80px] -z-10"></div>

            {/* Price */}
            <div className="text-zinc-500 text-[9px] font-black uppercase tracking-[3px] mb-1">
                STARTING PRICE
            </div>
            <div className="text-4xl font-black text-white uppercase tracking-tighter mb-8 text-shadow-lg">
                $3,250,000
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3 mb-8 w-full">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                        <div className="bg-red-800/20 p-1.5 rounded-full border border-red-700/30 group-hover:bg-red-800 transition-all flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-red-500 group-hover:text-white" />
                        </div>
                        <span className="text-zinc-400 text-[10px] font-semibold uppercase tracking-wider">
                            {feature}
                        </span>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 w-full mb-8">
                <button className="bg-red-700 hover:bg-red-600 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[3px] flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-red-900/20 active:scale-95">
                    <ShoppingCart className="w-4 h-4" />
                    Reserve Your Slot
                </button>
                <button className="bg-white/5 border border-red-700 hover:bg-white/10 text-red-700 hover:text-white/70 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[3px] flex items-center justify-center gap-2.5 transition-all">
                    <Calendar className="w-4 h-4" />
                    Request Private Viewing
                </button>
            </div>

            {/* Concierge */}
            <div className="pt-6 border-t border-red-900/20 w-full flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-all">
                <div className="bg-red-950/50 p-3 rounded-full border border-red-700/20 group-hover:bg-red-800 transition-all flex-shrink-0">
                    <Headphones className="w-5 h-5 text-red-600 group-hover:text-white" />
                </div>
                <div>
                    <div className="text-white font-black text-xs uppercase tracking-widest mb-0.5">
                        Personal Concierge
                    </div>
                    <div className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">
                        Available 24/7 for owners
                    </div>
                </div>
            </div>
        </div>
    );
}

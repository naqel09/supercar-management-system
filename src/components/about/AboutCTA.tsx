import {Calendar, Headphones} from "lucide-react";

export default function AboutCTA() {
    return (
        <section className="py-28 px-8 border-t border-red-900/10">
            <div className="container mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                        Experience it in person
                    </h2>
                    <p className="text-white/40 text-sm font-medium leading-relaxed mb-12">
                        Private viewings are available for qualified clients.
                        Discover our collection in an environment designed for
                        true enthusiasts.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[3px] flex items-center gap-3 transition-all shadow-lg shadow-red-900/30 active:scale-95 w-full sm:w-auto justify-center">
                            <Calendar className="w-4 h-4" />
                            Schedule Experience
                        </button>
                        <button className="bg-white/5 border border-red-900/20 hover:bg-white/10 hover:border-red-700/40 text-white/60 hover:text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[3px] flex items-center gap-3 transition-all w-full sm:w-auto justify-center">
                            <Headphones className="w-4 h-4" />
                            Contact Concierge
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";

export default function CTA() {
    return (
        <section className="relative px-4 py-32 bg-[#1a0505]/40 overflow-hidden text-center text-white">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none w-full max-w-lg">
                <div className="text-[200px] font-black italic tracking-tighter text-red-700 blur-3xl rounded-full bg-red-700 h-[400px]"></div>
            </div>

            <div className="relative z-10 container mx-auto">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8">
                    Ready to define your
                    <br />
                    <span className="italic text-red-700">Legacy?</span>
                </h2>

                <p className="max-w-xl mx-auto text-lg text-white/50 font-medium mb-12">
                    Join the elite circle of enthusiasts who settle for nothing
                    less than perfection.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="bg-red-700 hover:bg-red-600 px-12 py-5 text-sm font-bold uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(185,28,28,0.3)] min-w-[240px]">
                        Contact Specialist
                    </button>
                    <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-12 py-5 text-sm font-bold uppercase tracking-widest transition-all min-w-[240px]">
                        Request Brochure
                    </button>
                </div>
            </div>
        </section>
    );
}

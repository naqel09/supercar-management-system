import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 overflow-hidden text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-[#0a0101]/60">
                <Image
                    src="/images/hero.png"
                    alt="Luxury Supercar"
                    fill
                    className="object-cover object-center opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0101] via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 container px-6 md:px-12 mr-auto">
                <div className="flex items-center gap-2 bg-red-950/40 border border-red-500/20 px-3 py-1 rounded-full w-fit mb-8 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_5px_rgba(220,38,38,0.8)]"></div>
                    <span className="text-[10px] font-black uppercase tracking-[2px] text-red-600">
                        New Release: SF90 Stradale
                    </span>
                </div>

                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                    THE ART OF
                    <br />
                    <span className="italic text-red-700 block mt-2">
                        VELOCITY
                    </span>
                </h1>

                <p className="max-w-xl text-lg md:text-xl text-white/50 font-medium leading-relaxed mb-12">
                    Engineering excellence meets pure adrenaline. Discover our
                    curated selection of the world's most prestigious automotive
                    masterpieces.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-red-800 hover:bg-red-700 text-white px-10 py-4 rounded-md text-xs font-black uppercase tracking-widest transition-all shadow-[0_10px_20px_rgba(153,27,27,0.2)]">
                        Explore Inventory
                    </button>
                    <button className="bg-white/5 border border-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-md text-xs font-black uppercase tracking-widest transition-all backdrop-blur-md">
                        Custom Build
                    </button>
                </div>
            </div>
        </section>
    );
}

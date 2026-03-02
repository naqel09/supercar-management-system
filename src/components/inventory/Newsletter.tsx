export default function Newsletter() {
    return (
        <section className="bg-red-950/20 border border-red-900/10 py-16 px-12 md:py-24 md:px-24 mx-8 rounded-3xl mb-24 backdrop-blur-sm shadow-2xl overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-red-700/5 blur-[120px] rounded-full -z-10"></div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 max-w-7xl mx-auto">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Stay updated on new arrivals
                    </h2>
                    <p className="text-white/40 text-lg font-medium">
                        Get early access to limited edition drops and private
                        auctions.
                    </p>
                </div>

                <div className="w-full lg:max-w-md">
                    <div className="flex flex-col sm:flex-row items-stretch gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-black/40 border border-red-900/20 rounded-xl px-1 py-4 text-white text-sm focus:outline-none focus:border-red-700 transition-all font-medium placeholder:text-white/20 px-6"
                        />
                        <button className="bg-red-800 hover:bg-red-700 text-white px-10 py-4 rounded-xl text-xs font-black uppercase tracking-[3px] transition-all shadow-lg">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

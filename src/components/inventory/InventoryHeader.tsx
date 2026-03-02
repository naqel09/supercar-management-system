export default function InventoryHeader() {
    return (
        <header className="pt-32 pb-12 px-8 container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <span className="text-red-700 text-[10px] font-black uppercase tracking-[4px] block mb-4">
                        Exquisite Engineering
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6 text-shadow-lg">
                        Luxury Supercars
                    </h1>
                    <p className="max-w-xl text-white/50 text-lg font-medium leading-relaxed">
                        Experience the pinnacle of automotive performance. From
                        hybrid icons to track-focused legends.
                    </p>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold">
                    <span className="text-red-700">24</span>
                    <span className="text-white/40 uppercase tracking-widest">
                        Models available
                    </span>
                </div>
            </div>
        </header>
    );
}

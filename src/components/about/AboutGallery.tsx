import Image from "next/image";

export default function AboutGallery() {
    return (
        <section className="py-20 px-8 border-t border-red-900/10">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <p className="text-red-600 text-[9px] font-black uppercase tracking-[4px] mb-3">
                            Our Showroom
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                            Our Sanctuary of Speed
                        </h2>
                    </div>
                    <p className="text-white/30 text-xs font-semibold hidden md:block max-w-xs text-right leading-relaxed">
                        A curated environment where every vehicle is presented
                        as a piece of art, deserving of its own stage.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[520px]">
                    {/* Large left image */}
                    <div className="md:col-span-2 relative rounded-3xl overflow-hidden border border-red-900/10 shadow-2xl group cursor-pointer">
                        <Image
                            src="/images/gallery_2.png"
                            alt="Main showroom floor"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    {/* Two stacked right images */}
                    <div className="flex flex-col gap-4">
                        <div className="flex-1 relative rounded-3xl overflow-hidden border border-red-900/10 shadow-xl group cursor-pointer">
                            <Image
                                src="/images/gallery_1.png"
                                alt="Interior detail"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                        <div className="flex-1 relative rounded-3xl overflow-hidden border border-red-900/10 shadow-xl group cursor-pointer">
                            <Image
                                src="/images/gallery_3.png"
                                alt="Exterior showcase"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

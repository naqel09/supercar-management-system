import Image from "next/image";

const images = [
    {src: "/images/gallery_1.png", alt: "Cockpit view"},
    {src: "/images/gallery_2.png", alt: "Rear view"},
    {src: "/images/gallery_3.png", alt: "Side view"},
];

export default function ProductContent() {
    return (
        <div className="space-y-16">
            {/* Design Philosophy */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-7 bg-red-700 rounded-full"></div>
                    <h2 className="text-2xl font-black text-white tracking-tight">
                        Design Philosophy
                    </h2>
                </div>
                <p className="text-white/40 text-base font-medium leading-[1.9]">
                    The Apex Carbon RS isn't just a vehicle; it's a testament to
                    engineering excellence and aesthetic purity. Every curve is
                    sculpted by the wind, every vent serves a vital cooling
                    purpose, and every carbon fiber thread is laid by hand to
                    ensure structural perfection.
                </p>
            </section>

            {/* Gallery */}
            <section>
                <h2 className="text-2xl font-black text-white tracking-tight mb-6">
                    Gallery
                </h2>
                <div className="grid grid-cols-3 gap-4 h-52">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative group rounded-2xl overflow-hidden border border-red-900/10 shadow-lg cursor-pointer bg-black/20"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

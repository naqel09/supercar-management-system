import Image from "next/image";

const collections = [
    {
        title: "Track Monsters",
        description: "Street legal machines built for pure circuit dominance.",
        image: "/images/track_monsters.png",
        accentColor: "bg-red-700/80",
    },
    {
        title: "Italian Heritage",
        description: "The finest craftsmanship from the heart of Maranello.",
        image: "/images/italian_heritage.png",
        accentColor: "bg-emerald-800/80",
    },
];

export default function Collections() {
    return (
        <section className="bg-transparent py-24 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4 relative inline-block">
                        Featured Collections
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-red-700"></div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {collections.map((collection, index) => (
                        <div
                            key={index}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={collection.image}
                                alt={collection.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                            <div className="absolute bottom-10 left-10 right-10 z-10">
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-2 italic">
                                    {collection.title}
                                </h3>
                                <p className="text-white/60 text-sm font-medium mb-6 max-w-sm">
                                    {collection.description}
                                </p>
                                <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 py-2.5 text-[10px] font-black uppercase tracking-[2px] transition-all rounded">
                                    Explore Series
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

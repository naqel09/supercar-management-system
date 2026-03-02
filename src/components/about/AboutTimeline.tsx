const events = [
    {
        era: "The Foundation",
        year: "1994",
        description:
            "Founded in a small boutique garage in Zurich, focusing exclusively on rare Italian marques.",
    },
    {
        era: "Global Expansion",
        year: "2008",
        description:
            "Opening our flagship showrooms and expanding the curated bespoke acquisition services.",
    },
    {
        era: "The Digital Age",
        year: "2019",
        description:
            "Launching the industry's definitive experience and redefining digital purchasing experiences.",
    },
];

export default function AboutTimeline() {
    return (
        <section className="py-28 px-8 border-t border-red-900/10">
            <div className="container mx-auto">
                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                        Our Journey Through Time
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-[180px] top-0 bottom-0 w-px bg-red-900/20 hidden md:block" />

                    <div className="flex flex-col gap-0">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="group flex items-start gap-0 py-10 relative"
                            >
                                {/* Era label (left) */}
                                <div className="w-[180px] flex-shrink-0 hidden md:flex flex-col items-end pr-10 pt-1">
                                    <span className="text-white font-black text-sm uppercase tracking-tight group-hover:text-red-500 transition-colors">
                                        {event.era}
                                    </span>
                                    <span className="text-red-700 text-[10px] font-black tracking-[2px] mt-1">
                                        {event.year}
                                    </span>
                                </div>

                                {/* Dot */}
                                <div className="hidden md:flex flex-shrink-0 relative z-10">
                                    <div className="w-3 h-3 rounded-full bg-red-800 border-2 border-red-600 group-hover:scale-125 transition-transform mt-1 shadow-lg shadow-red-900/30" />
                                </div>

                                {/* Description */}
                                <div className="flex-1 md:pl-10 pl-0">
                                    {/* Mobile label */}
                                    <div className="md:hidden mb-2">
                                        <span className="text-white font-black text-sm uppercase tracking-tight">
                                            {event.era}
                                        </span>
                                        <span className="text-red-700 text-[10px] font-black tracking-[2px] ml-3">
                                            {event.year}
                                        </span>
                                    </div>
                                    <p className="text-white/40 text-sm font-medium leading-relaxed max-w-md">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

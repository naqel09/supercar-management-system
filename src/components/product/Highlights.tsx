import {Armchair, Share2} from "lucide-react";

const highlights = [
    {
        icon: <Armchair className="w-5 h-5 text-white" />,
        title: "Ergonomic Cockpit",
        description:
            "Custom-molded carbon fiber seats wrapped in hand-stitched Italian leather, providing perfect lateral support during high-G maneuvers.",
    },
    {
        icon: <Share2 className="w-5 h-5 text-white" />,
        title: "Active Aero",
        description:
            "Automatically adjusting rear wing and front flaps that optimize downforce and drag reduction in real-time based on velocity.",
    },
];

export default function Highlights() {
    return (
        <section className="bg-transparent py-24 px-8 border-t border-red-900/10">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Highlights
                    </h2>
                    <div className="h-1 w-12 bg-red-700 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {highlights.map((h, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-start gap-6 group p-6 rounded-2xl hover:bg-red-900/5 transition-all"
                        >
                            <div className="bg-red-800 p-3.5 rounded-2xl border border-red-500/20 group-hover:bg-red-700 transition-all shadow-lg shadow-red-900/20 flex-shrink-0">
                                {h.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3 group-hover:text-red-500 transition-colors">
                                    {h.title}
                                </h3>
                                <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                                    {h.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import {Zap, ShieldCheck, Globe} from "lucide-react";

const features = [
    {
        icon: <Zap className="w-6 h-6 text-red-700" />,
        id: "01",
        title: "Unrivaled Power",
        description:
            "Every vehicle in our collection features upwards of 700HP, meticulously maintained for peak performance.",
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-red-700" />,
        id: "02",
        title: "Certified Provenance",
        description:
            "Full history reports and multi-point inspections by factory-trained technicians for every supercar.",
    },
    {
        icon: <Globe className="w-6 h-6 text-red-700" />,
        id: "03",
        title: "Global Concierge",
        description:
            "White-glove delivery service to any location worldwide, ensuring your vehicle arrives in pristine condition.",
    },
];

export default function Features() {
    return (
        <section className="bg-transparent py-20 px-4 md:px-8 border-t border-red-900/10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group relative bg-[#1a0505]/40 backdrop-blur-sm border border-red-900/20 p-8 rounded-lg hover:bg-[#2a0808]/50 hover:border-red-700/50 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute top-4 right-4 text-xs font-mono font-bold text-white/20 group-hover:text-red-700/40">
                            {feature.id}
                        </div>
                        <div className="bg-red-700/10 w-fit p-3 rounded-lg mb-6 group-hover:bg-red-700/20 transition-colors">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 tracking-tight uppercase group-hover:text-red-700/90 transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed text-sm font-medium">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

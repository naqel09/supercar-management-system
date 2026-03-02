import Image from "next/image";
import {ChevronRight} from "lucide-react";

const cars = [
    {
        name: "Lamborghini Aventador SVJ",
        price: "$511,000",
        specs: "770 HP | V12 | 2.8s 0-60",
        image: "/images/lamborghini.png",
        isNew: true,
    },
    {
        name: "Porsche 911 GT3 RS",
        price: "$289,000",
        specs: "510 HP | H6 | 3.2s 0-60",
        image: "/images/porsche.png",
        isNew: false,
    },
    {
        name: "McLaren 720S Spider",
        price: "$342,000",
        specs: "710 HP | V8 | 2.8s 0-60",
        image: "/images/mclaren.png",
        isNew: false,
    },
];

export default function NewArrivals() {
    return (
        <section className="bg-transparent py-24 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <div className="text-red-700 text-[10px] font-bold uppercase tracking-[4px] mb-3">
                            Curated Selection
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                            New Arrivals
                        </h2>
                    </div>
                    <button className="flex items-center gap-2 text-white/50 text-sm font-bold uppercase tracking-widest hover:text-red-700 transition-colors mb-2">
                        View All <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {cars.map((car, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 mb-6 group-hover:border-red-700/30 transition-all duration-500">
                                {car.isNew && (
                                    <div className="absolute top-4 left-4 z-10 bg-red-700 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-tighter">
                                        NEW
                                    </div>
                                )}
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                                />
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-sm font-bold uppercase tracking-tight text-white group-hover:text-red-700 transition-colors">
                                    {car.name}
                                </h3>   
                                <span className="text-red-700 font-bold text-sm whitespace-nowrap">
                                    {car.price}
                                </span>
                            </div>
                            <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">
                                {car.specs}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

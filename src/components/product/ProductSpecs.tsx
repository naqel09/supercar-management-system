import {Timer, Gauge, Zap, Waves} from "lucide-react";

const specs = [
    {
        label: "ENGINE",
        value: "6.5L V12",
        subValue: "Hybrid",
        icon: <Waves className="w-4 h-4 text-red-500" />,
    },
    {
        label: "TOP SPEED",
        value: "385 km/h",
        icon: <Gauge className="w-4 h-4 text-red-500" />,
    },
    {
        label: "0-100 KM/H",
        value: "2.4",
        subValue: "Seconds",
        icon: <Timer className="w-4 h-4 text-red-500" />,
    },
    {
        label: "POWER",
        value: "1050 HP",
        icon: <Zap className="w-4 h-4 text-red-500" />,
    },
];

export default function ProductSpecs() {
    return (
        <div className="flex flex-wrap items-start gap-0 py-8 px-6 bg-[#1a0505]/60 backdrop-blur-md rounded-2xl border border-red-900/15 mb-12 shadow-2xl relative overflow-hidden">
            {/* Visual Decor */}
            <div className="absolute top-0 left-0 w-24 h-0.5 bg-red-700"></div>

            {/* Brand Label */}
            <div className="w-full mb-6 flex items-center gap-2">
                <span className="text-red-600 text-[9px] font-black uppercase tracking-[3px]">
                    EARTH ENGINE
                </span>
                <div className="h-px flex-1 bg-red-900/20"></div>
            </div>

            {specs.map((spec, index) => (
                <div
                    key={index}
                    className={`flex-1 min-w-[110px] flex flex-col items-start px-4 ${
                        index !== specs.length - 1
                            ? "border-r border-red-900/15"
                            : ""
                    }`}
                >
                    <div className="flex items-center gap-2 mb-2">
                        {spec.icon}
                        <span className="text-zinc-500 text-[9px] font-black uppercase tracking-[2px]">
                            {spec.label}
                        </span>
                    </div>
                    <div className="text-xl font-black text-white uppercase tracking-tight leading-tight">
                        {spec.value}
                    </div>
                    {spec.subValue && (
                        <div className="text-sm font-bold text-white/60 uppercase tracking-tight">
                            {spec.subValue}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

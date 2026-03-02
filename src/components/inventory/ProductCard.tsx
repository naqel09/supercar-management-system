import Image from "next/image";
import {Heart, Info} from "lucide-react";
import Link from "next/link";

interface CarProps {
    name: string;
    price: string;
    type: string;
    hp: string;
    zeroToHundred: string;
    image: string;
    isLimited?: boolean;
}

export default function ProductCard({
    name,
    price,
    type,
    hp,
    zeroToHundred,
    image,
    isLimited,
}: CarProps) {
    const cardId = name.toLowerCase().replace(/ /g, "-");

    return (
        <Link
            href={`/inventory/${cardId}`}
            className="group bg-[#160404] rounded-2xl overflow-hidden border border-white/5 hover:border-red-900/20 transition-all duration-300 flex flex-col h-full shadow-2xl"
        >
            {/* Image Section */}
            <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Wishlist Button */}
                <div className="absolute top-4 right-4 z-10">
                    <button className="bg-black/40 backdrop-blur-md p-2.5 rounded-full hover:bg-black/60 transition-all group/heart">
                        <Heart className="w-4 h-4 text-white group-hover/heart:fill-white transition-all" />
                    </button>
                </div>

                {/* Limited Badge */}
                {isLimited && (
                    <div className="absolute top-4 left-4 z-10 bg-red-700 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-lg tracking-wider">
                        LIMITED
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-7 flex-1 flex flex-col">
                {/* Title & Price */}
                <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                        {name}
                    </h3>
                    <span className="text-red-700 font-bold text-xl">
                        {price}
                    </span>
                </div>

                {/* Subtitle */}
                <p className="text-red-950 font-bold text-sm mb-10 tracking-wide opacity-80">
                    {type}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                        <div className="text-zinc-500 text-[9px] font-black uppercase tracking-[2px] mb-2">
                            Performance
                        </div>
                        <div className="text-white font-bold text-base">
                            {hp}
                        </div>
                    </div>
                    <div>
                        <div className="text-zinc-500 text-[9px] font-black uppercase tracking-[2px] mb-2">
                            0-100 KM/H
                        </div>
                        <div className="text-white font-bold text-base">
                            {zeroToHundred}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex items-center gap-2">
                    <div className="flex-1 bg-red-800 hover:bg-red-700 text-white py-4 rounded-xl text-xs font-black uppercase tracking-[3px] transition-all shadow-lg active:scale-[0.98] text-center">
                        Configure
                    </div>
                    <div className="bg-[#120a0a] p-4 rounded-xl hover:bg-[#1a0f0f] transition-all border border-white/5">
                        <Info className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </Link>
    );
}

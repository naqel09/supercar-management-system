"use client";

import {useState} from "react";
import {MapPin, Navigation} from "lucide-react";

export default function MapSection() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={`relative w-full h-[400px] md:h-[500px] bg-[#1a0505]/50 border border-red-900/20 rounded-[40px] overflow-hidden shadow-2xl flex items-center justify-center ${
                !isActive ? "cursor-pointer" : ""
            }`}
            onClick={() => !isActive && setIsActive(true)}
        >
            {/* Dark/Red Map Overlay styling mock using gradient and grayscale */}
            <div
                className={`absolute inset-0 bg-[#3b0000] mix-blend-multiply transition-opacity duration-1000 z-10 pointer-events-none ${
                    isActive ? "opacity-0" : "opacity-50"
                }`}
            />
            <div
                className={`absolute inset-0 z-0 transition-all duration-1000 ${
                    isActive
                        ? "opacity-100 grayscale-0 sepia-0 brightness-100 contrast-100"
                        : "opacity-40 grayscale sepia brightness-50 contrast-125 pointer-events-none"
                }`}
            >
                {/* Google Maps iframe */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9381239510017!2d107.64270387317865!3d-6.898004267500627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e797d4ff9d55%3A0x7255df8d69db4d3a!2sUniversitas%20Widyatama!5e0!3m2!1sid!2sid!4v1772438771800!5m2!1sid!2sid"
                    className={`w-full h-full object-cover transition-all ${
                        isActive ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                    style={{border: 0}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Custom Content inside Map - HIDES on Click */}
            <div
                className={`relative z-20 flex flex-col items-center gap-4 transition-opacity duration-700 pointer-events-none ${
                    isActive ? "opacity-0" : "opacity-100"
                }`}
            >
                {/* Map Marker */}
                <div className="w-14 h-14 bg-red-700/20 rounded-full flex items-center justify-center backdrop-blur-md animate-pulse">
                    <div className="w-10 h-10 bg-red-700 shadow-lg shadow-red-900/50 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                    </div>
                </div>

                {/* Tooltip Card */}
                <div className="bg-[#110101]/90 backdrop-blur-md border border-red-900/20 rounded-xl px-5 py-3 text-center shadow-xl">
                    <div className="font-bold text-sm mb-1">
                        Universitas Widyatama
                    </div>
                    <div className="text-red-600 text-[10px] font-black uppercase tracking-[2px]">
                        Showroom Location
                    </div>
                </div>

                {/* Helper text */}
                <div className="mt-2 text-white/40 text-[9px] font-bold uppercase tracking-[3px] bg-black/40 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                    Click to Interact
                </div>
            </div>

            {/* Map Controls - Also hides on click so users can use Google's native controls */}
            <div
                className={`absolute bottom-6 right-6 z-20 flex items-end gap-4 transition-opacity duration-700 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
                <div className="bg-red-700 text-white font-bold text-xs px-6 py-4 rounded-xl flex items-center gap-2 shadow-lg">
                    <Navigation className="w-4 h-4 fill-white" />
                    Get Directions
                </div>
            </div>

            {/* Optional: Add a close button if they want to blur it back again */}
            {isActive && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsActive(false);
                    }}
                    className="absolute top-6 right-6 z-30 bg-black/70 hover:bg-black text-white text-[10px] font-black uppercase tracking-[2px] px-4 py-2 rounded-lg border border-white/10 backdrop-blur-md transition-colors shadow-xl"
                >
                    Lock Map
                </button>
            )}
        </div>
    );
}

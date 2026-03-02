import type {Metadata} from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Mail,
    Phone,
    MapPin,
    Share2,
    Aperture,
    Library,
    ArrowRight,
    Plus,
    Navigation,
    ChevronDown,
} from "lucide-react";
import Image from "next/image";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
    title: "Contact Us | LuxeAuto",
    description: "Get in touch with LuxeAuto specialists.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#130404] text-white selection:bg-red-700 selection:text-white font-sans overflow-x-hidden flex flex-col">
            <Navbar />

            <div className="flex-1 container mx-auto px-8 pt-36 pb-24 max-w-6xl">
                {/* Header Section */}
                <div className="mb-16">
                    <div className="text-red-600 text-[10px] font-black uppercase tracking-[3px] mb-4">
                        GET IN TOUCH
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
                        Let&apos;s start a<br />
                        <span className="text-red-600">Conversation.</span>
                    </h1>
                    <p className="text-white/50 text-[15px] font-medium max-w-xl leading-relaxed">
                        Whether you&apos;re looking for a custom piece or want
                        to visit our flagship showroom, our specialists are
                        ready to assist you in creating something extraordinary.
                    </p>
                </div>

                {/* Main Content: Form & Info */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 mb-24">
                    {/* Left: Form */}
                    <div className="bg-[#1a0505]/60 border border-red-900/15 rounded-3xl p-8 md:p-10 shadow-2xl">
                        <h2 className="text-2xl font-black tracking-tight mb-8">
                            Send us a Message
                        </h2>

                        <form className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold text-white/50 px-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Alexander Thorne"
                                        className="w-full bg-[#110101]/80 border border-red-900/20 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-red-700 transition-colors placeholder:text-white/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold text-white/50 px-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="alex@luxeauto.com"
                                        className="w-full bg-[#110101]/80 border border-red-900/20 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-red-700 transition-colors placeholder:text-white/20"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-semibold text-white/50 px-1">
                                    Inquiry Type
                                </label>
                                <div className="relative">
                                    <select className="w-full bg-[#110101]/80 border border-red-900/20 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-red-700 transition-colors appearance-none text-white/90">
                                        <option>Bespoke Commission</option>
                                        <option>Showroom Appointment</option>
                                        <option>General Inquiry</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-semibold text-white/50 px-1">
                                    Your Message
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-[#110101]/80 border border-red-900/20 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-red-700 transition-colors placeholder:text-white/20 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-red-700 hover:bg-red-600 text-white font-black text-xs uppercase tracking-[2px] py-4 rounded-xl flex items-center justify-center gap-3 transition-colors mt-2"
                            >
                                Send Inquiry
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="flex flex-col justify-center gap-6">
                        {/* Info Cards */}
                        <div className="flex flex-col gap-4">
                            <div className="bg-[#1a0505]/40 border border-red-900/10 hover:border-red-900/30 transition-colors rounded-3xl p-6 flex items-start gap-5">
                                <div className="bg-red-950/40 p-3 rounded-2xl">
                                    <Mail className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm mb-1">
                                        Email Us
                                    </h3>
                                    <p className="text-white/50 text-xs">
                                        concierge@luxeauto.com
                                    </p>
                                    <p className="text-white/50 text-xs mt-0.5">
                                        press@luxeauto.com
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#1a0505]/40 border border-red-900/10 hover:border-red-900/30 transition-colors rounded-3xl p-6 flex items-start gap-5">
                                <div className="bg-red-950/40 p-3 rounded-2xl">
                                    <Phone className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm mb-1">
                                        Call Us
                                    </h3>
                                    <p className="text-white/50 text-xs">
                                        +1 (888) 500-2400
                                    </p>
                                    <p className="text-white/30 text-[10px] mt-1 uppercase tracking-wider">
                                        Mon-Fri 9:00 AM - 6:00 PM EST
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#1a0505]/40 border border-red-900/10 hover:border-red-900/30 transition-colors rounded-3xl p-6 flex items-start gap-5">
                                <div className="bg-red-950/40 p-3 rounded-2xl">
                                    <MapPin className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm mb-1">
                                        Flagship Showroom
                                    </h3>
                                    <p className="text-white/50 text-xs">
                                        450 Park Avenue, 12th Floor
                                    </p>
                                    <p className="text-white/50 text-xs mt-0.5">
                                        New York, NY 10022
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h4 className="text-[10px] font-black uppercase tracking-[3px] text-white/40 mb-5">
                                Follow The Brand
                            </h4>
                            <div className="flex items-center gap-5">
                                <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                                    <Share2 className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                                    <Aperture className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                                    <Library className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <MapSection />
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}

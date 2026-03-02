import Link from "next/link";
import {Instagram, Youtube, Facebook, Globe, ArrowRight} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent text-white px-8 pt-24 pb-12 border-t border-red-900/10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 items-start">
                    <div className="flex flex-col gap-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                        >
                            <div className="w-8 h-8 bg-red-800 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500 flex items-center justify-center">
                                <span className="transform -rotate-45 group-hover:-rotate-90 transition-transform duration-500 text-white font-black text-xs">
                                    L
                                </span>
                            </div>
                            <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap">
                                LUXE{" "}
                                <span className="text-red-700">MOTORS</span>
                            </span>
                        </Link>
                        <p className="text-white/30 text-xs font-semibold leading-relaxed max-w-[280px]">
                            The global destination for luxury automotive
                            enthusiasts. Expertly curated inventory and bespoke
                            services for the modern collector.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <Link
                                href="#"
                                className="p-2 border border-white/5 rounded-full hover:bg-red-800 transition-all hover:border-red-800"
                            >
                                <Globe className="w-4 h-4 text-white/40" />
                            </Link>
                            <Link
                                href="#"
                                className="p-2 border border-white/5 rounded-full hover:bg-red-800 transition-all hover:border-red-800"
                            >
                                <Youtube className="w-4 h-4 text-white/40" />
                            </Link>
                            <Link
                                href="#"
                                className="p-2 border border-white/5 rounded-full hover:bg-red-800 transition-all hover:border-red-800"
                            >
                                <Instagram className="w-4 h-4 text-white/40" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[3px] text-red-700">
                            Company
                        </h4>
                        <div className="flex flex-col gap-4 text-xs font-bold text-white/40">
                            <Link
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Showrooms
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Careers
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[3px] text-red-700">
                            Support
                        </h4>
                        <div className="flex flex-col gap-4 text-xs font-bold text-white/40">
                            <Link
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Contact
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Maintenance
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Shipping
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[3px] text-red-700">
                            Social
                        </h4>
                        <div className="flex items-center gap-4 text-xs font-bold text-white/40">
                            <Link
                                href="#"
                                className="hover:text-white transition-colors flex items-center gap-2"
                            >
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition-colors flex items-center gap-2"
                            >
                                <Youtube className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition-colors flex items-center gap-2"
                            >
                                <Globe className="w-4 h-4" />
                            </Link>
                        </div>
                        <p className="text-[10px] text-white/20 mt-4 leading-relaxed tracking-wider">
                            Stay connected with our global community of
                            enthusiasts.
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-red-900/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-[3px] text-white/20">
                    <p>© {currentYear} LUXE MOTORS. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

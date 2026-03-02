import Link from "next/link";
import {Instagram, Twitter, Facebook, ArrowRight} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent text-white px-8 pt-24 pb-12 border-t border-red-400">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <Link
                            href="/"
                            className="text-2xl font-black tracking-tighter mb-6 block"
                        >
                            VELOCE
                        </Link>
                        <p className="text-white/40 text-sm font-medium leading-relaxed mb-8 max-w-[240px]">
                            The global destination for luxury supercar
                            acquisition, redefining the automotive buying
                            experience since 1998.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="#"
                                className="p-2 border border-white/10 rounded hover:bg-red-700 hover:border-red-700 transition-all"
                            >
                                <Instagram className="w-5 h-5 text-white/60" />
                            </Link>
                            <Link
                                href="#"
                                className="p-2 border border-white/10 rounded hover:bg-red-700 hover:border-red-700 transition-all"
                            >
                                <Twitter className="w-5 h-5 text-white/60" />
                            </Link>
                            <Link
                                href="#"
                                className="p-2 border border-white/10 rounded hover:bg-red-700 hover:border-red-700 transition-all"
                            >
                                <Facebook className="w-5 h-5 text-white/60" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6">
                            Quick Links
                        </h4>
                        <div className="flex flex-col gap-4 text-sm font-medium text-white/40">
                            <Link
                                href="#"
                                className="hover:text-red-700 transition-colors"
                            >
                                Current Inventory
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-red-700 transition-colors"
                            >
                                Sell Your Car
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-red-700 transition-colors"
                            >
                                Financing
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-red-700 transition-colors"
                            >
                                Our Showrooms
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6">
                            Experience
                        </h4>
                        <div className="flex flex-col gap-4 text-sm font-medium text-white/40">
                            <Link
                                href="#"
                                className="hover:text-red-700 transition-colors"
                            >
                                Track Events
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-red-700 transition-colors"
                            >
                                VELOCE Club
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-red-700 transition-colors"
                            >
                                Custom Tailoring
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-red-700 transition-colors"
                            >
                                Maintenance
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6">
                            Newsletter
                        </h4>
                        <p className="text-sm text-white/40 font-medium mb-6">
                            Stay updated on our latest high-performance
                            arrivals.
                        </p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-sm focus:outline-none focus:border-red-700 transition-colors"
                            />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-700 p-2.5 rounded-r hover:bg-red-600 transition-colors cursor-pointer">
                                join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-red-700 flex flex-col md:flex-col justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[2px] text-slate-700">
                    <p>
                        © {currentYear} VELOCE Automotive Group. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link
                            href="#"
                            className="hover:text-red-700 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-red-700 transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-red-700 transition-colors"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

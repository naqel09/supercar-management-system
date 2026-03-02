import Link from "next/link";
import {Search, User, Menu, Heart, ShoppingCart} from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#1a0505]/40 backdrop-blur-md border-b border-red-900/10 text-white">
            <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-red-800 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500 flex items-center justify-center">
                        <span className="transform -rotate-45 group-hover:-rotate-90 transition-transform duration-500 text-white font-black text-xs">
                            L
                        </span>
                    </div>
                    <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">
                        LUXE <span className="text-red-700">MOTORS</span>
                    </span>
                </Link>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide uppercase">
                    <Link
                        href="/inventory"
                        className="hover:text-red-500 transition-colors"
                    >
                        Inventory
                    </Link>
                    <Link
                        href="/about"
                        className="hover:text-red-500 transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className="hover:text-red-500 transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative hidden lg:block">
                    <input
                        type="text"
                        placeholder="Search models..."
                        className="bg-white/5 border border-white/10 rounded-md py-1.5 px-4 pr-10 text-sm focus:outline-none focus:border-red-500/50 w-64"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                </div>
                <div className="flex items-center gap-5">
                    <button className="relative p-1 hover:text-red-700 transition-colors group">
                        <Heart className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-700 rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
                    </button>
                    <Link
                        href="/cart"
                        className="relative p-1 hover:text-red-700 transition-colors group"
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/dashboard"
                        className="bg-white/10 p-1 rounded-full group hover:bg-red-800 transition-all duration-300"
                    >
                        <div className="w-7 h-7 bg-zinc-800 rounded-full overflow-hidden border border-white/10 flex items-center justify-center">
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-900 to-black text-[10px] font-bold">
                                JD
                            </div>
                        </div>
                    </Link>
                    <Menu className="w-6 h-6 lg:hidden cursor-pointer hover:text-red-700 transition-colors" />
                </div>
            </div>
        </nav>
    );
}

import Link from "next/link";
import {Search, User, Menu} from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#1a0505]/40 backdrop-blur-md border-b border-red-900/10 text-white">
            <div className="flex items-center gap-8">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    VELOCE
                </Link>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide uppercase">
                    <Link
                        href="/inventory"
                        className="hover:text-red-500 transition-colors"
                    >
                        Inventory
                    </Link>
                    <Link
                        href="/collections"
                        className="hover:text-red-500 transition-colors"
                    >
                        Collections
                    </Link>
                    <Link
                        href="/bespoke"
                        className="hover:text-red-500 transition-colors"
                    >
                        Bespoke
                    </Link>
                    <Link
                        href="/legacy"
                        className="hover:text-red-500 transition-colors"
                    >
                        Legacy
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
                <button className="bg-red-700 hover:bg-red-600 px-6 py-2 rounded text-sm font-bold uppercase transition-all tracking-wider">
                    Inquire
                </button>
                <div className="flex items-center gap-4">
                    <User className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors" />
                    <Menu className="w-5 h-5 md:hidden cursor-pointer hover:text-red-500 transition-colors" />
                </div>
            </div>
        </nav>
    );
}

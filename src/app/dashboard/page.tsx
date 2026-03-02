import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {
    LayoutDashboard,
    ClipboardList,
    Heart,
    CreditCard,
    LogOut,
    Bell,
    Settings,
    MoreVertical,
    MapPin,
    Car,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Dashboard | LuxeAuto",
    description: "Manage your luxury vehicle profile and orders.",
};

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-[#110404] text-white selection:bg-red-700 selection:text-white font-sans flex flex-col">
            {/* Dashboard Navbar */}
            <nav className="flex items-center justify-between px-8 py-4 bg-[#1a0505] border-b border-white/5 sticky top-0 z-50">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-6 h-6 bg-red-800 rounded-md transform rotate-45 flex items-center justify-center">
                        <span className="transform -rotate-45 text-white font-black text-[10px]">
                            L
                        </span>
                    </div>
                    <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap">
                        LuxeAuto
                    </span>
                </Link>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
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

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-600 rounded-full"></span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <Settings className="w-5 h-5" />
                    </button>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-800 to-black overflow-hidden border border-white/10">
                        {/* Placeholder for User Avatar */}
                        <div className="w-full h-full flex items-center justify-center text-xs font-bold text-white">
                            DT
                        </div>
                    </div>
                </div>
            </nav>

            {/* Dashboard Layout */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside className="w-64 bg-[#160404] border-r border-white/5 hidden lg:flex flex-col">
                    {/* User Snippet */}
                    <div className="p-8 flex items-center gap-4 border-b border-white/5">
                        <div className="w-12 h-12 rounded-full border border-red-900/50 bg-gradient-to-tr from-red-600 to-red-900 flex items-center justify-center shadow-lg relative">
                            {/* Inner circle to mimic photo border/background */}
                            <div className="w-11 h-11 bg-[#1a0505] rounded-full flex items-center justify-center overflow-hidden">
                                <span className="text-white font-bold">DT</span>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#160404]"></div>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm leading-tight">
                                Dominic Toretto
                            </h3>
                            <p className="text-red-600 text-[10px] font-black uppercase tracking-widest mt-1">
                                Elite Member
                            </p>
                        </div>
                    </div>

                    {/* Nav Menu */}
                    <div className="flex flex-col mt-6 px-4 gap-1">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-3 bg-red-700 text-white px-4 py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-red-900/20"
                        >
                            <LayoutDashboard className="w-5 h-5" />
                            Dashboard
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 text-white/50 hover:text-white px-4 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
                        >
                            <ClipboardList className="w-5 h-5" />
                            Order History
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 text-white/50 hover:text-white px-4 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
                        >
                            <Heart className="w-5 h-5" />
                            Saved Cars
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 text-white/50 hover:text-white px-4 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
                        >
                            <CreditCard className="w-5 h-5" />
                            Payments
                        </Link>
                    </div>

                    <div className="mt-auto p-4 border-t border-white/5">
                        <Link
                            href="/login"
                            className="flex items-center gap-3 text-white/50 hover:text-red-500 px-4 py-3.5 w-full rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            Sign Out
                        </Link>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-[#110404]">
                    <div className="max-w-5xl mx-auto space-y-8">
                        {/* Top Profile Banner Card */}
                        <div className="bg-[#1a0505] rounded-3xl border border-red-900/20 overflow-hidden shadow-2xl">
                            {/* Inner Info Section */}
                            <div className="p-8 pb-0 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 relative">
                                <div className="flex flex-col md:flex-row items-center md:items-center gap-6 z-10">
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#3b1212] to-[#601919] border border-red-900/30 overflow-hidden flex items-center justify-center flex-shrink-0">
                                        <span className="text-3xl font-black text-white/80">
                                            DT
                                        </span>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h2 className="text-2xl font-black text-white tracking-tight mb-1">
                                            Dominic Toretto
                                        </h2>
                                        <p className="text-white/50 text-sm font-medium mb-3">
                                            Premium Member since Jan 2021
                                        </p>
                                        <div className="flex items-center justify-center md:justify-start gap-1.5 text-red-600 text-xs font-semibold">
                                            <MapPin className="w-3.5 h-3.5" />
                                            Los Angeles, CA
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 z-10">
                                    <button className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-bold transition-all whitespace-nowrap">
                                        Edit Profile
                                    </button>
                                    <button className="px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-600 text-white shadow-lg shadow-red-900/20 text-xs font-bold transition-all whitespace-nowrap">
                                        Upgrade Plan
                                    </button>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 mt-4">
                                <div className="bg-[#110101]/60 border border-red-900/20 rounded-2xl py-6 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-black text-white mb-1">
                                        12
                                    </span>
                                    <span className="text-white/40 text-[9px] font-black uppercase tracking-[2px]">
                                        Total Orders
                                    </span>
                                </div>
                                <div className="bg-[#110101]/60 border border-red-900/20 rounded-2xl py-6 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-black text-white mb-1">
                                        5
                                    </span>
                                    <span className="text-white/40 text-[9px] font-black uppercase tracking-[2px]">
                                        Saved Cars
                                    </span>
                                </div>
                                <div className="bg-[#110101]/60 border border-red-900/20 rounded-2xl py-6 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-black text-white mb-1">
                                        3
                                    </span>
                                    <span className="text-white/40 text-[9px] font-black uppercase tracking-[2px]">
                                        Reviews
                                    </span>
                                </div>
                                <div className="bg-[#110101]/60 border border-red-900/20 rounded-2xl py-6 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-black text-white mb-1">
                                        2.4k
                                    </span>
                                    <span className="text-white/40 text-[9px] font-black uppercase tracking-[2px]">
                                        Points
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex items-center gap-8 border-b border-white/5 px-2">
                            <button className="text-[11px] font-black uppercase tracking-[2px] pb-4 border-b-2 border-red-600 text-white transition-colors">
                                ORDER HISTORY
                            </button>
                            <button className="text-[11px] font-black uppercase tracking-[2px] pb-4 border-b-2 border-transparent text-white/30 hover:text-white transition-colors">
                                SAVED CARS
                            </button>
                            <button className="text-[11px] font-black uppercase tracking-[2px] pb-4 border-b-2 border-transparent text-white/30 hover:text-white transition-colors">
                                ACCOUNT SETTINGS
                            </button>
                        </div>

                        {/* Recent Transactions List */}
                        <section className="mt-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-black text-white">
                                    Recent Transactions
                                </h3>
                                <Link
                                    href="#"
                                    className="text-red-600 text-xs font-bold hover:text-red-500 transition-colors"
                                >
                                    View All
                                </Link>
                            </div>

                            <div className="flex flex-col gap-4">
                                {/* Transaction Item 1 */}
                                <div className="bg-[#1a0505] border border-red-900/20 hover:border-red-900/40 transition-colors rounded-2xl p-4 flex items-center justify-between gap-6 group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-32 h-20 rounded-xl overflow-hidden relative shadow-lg bg-black shrink-0">
                                            <Image
                                                src="/images/gallery_3.png"
                                                alt="Car"
                                                fill
                                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1 leading-tight">
                                                2023 Chevrolet Corvette Z06
                                            </h4>
                                            <p className="text-white/40 text-xs">
                                                Order #AL-98234 • Oct 12, 2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8">
                                        <div className="text-right hidden sm:block">
                                            <div className="font-black text-white mb-1.5">
                                                $106,500
                                            </div>
                                            <div className="inline-block bg-green-950/40 text-green-500 border border-green-900/30 px-2 py-0.5 rounded text-[10px] font-bold">
                                                Completed
                                            </div>
                                        </div>
                                        <button className="text-white/30 hover:text-white">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Transaction Item 2 */}
                                <div className="bg-[#1a0505] border border-red-900/20 hover:border-red-900/40 transition-colors rounded-2xl p-4 flex items-center justify-between gap-6 group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-32 h-20 rounded-xl overflow-hidden relative shadow-lg bg-black shrink-0">
                                            <Image
                                                src="/images/gallery_2.png"
                                                alt="Car"
                                                fill
                                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1 leading-tight">
                                                Ferrari 488 Pista Performance
                                                Kit
                                            </h4>
                                            <p className="text-white/40 text-xs">
                                                Order #AL-98112 • Sept 28, 2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8">
                                        <div className="text-right hidden sm:block">
                                            <div className="font-black text-white mb-1.5">
                                                $12,400
                                            </div>
                                            <div className="inline-block bg-red-950/40 text-red-500 border border-red-900/30 px-2 py-0.5 rounded text-[10px] font-bold">
                                                In Transit
                                            </div>
                                        </div>
                                        <button className="text-white/30 hover:text-white">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Wishlist Grid */}
                        <section className="mt-12">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-black text-white">
                                    Wishlist (Saved Cars)
                                </h3>
                                <Link
                                    href="#"
                                    className="text-red-600 text-xs font-bold hover:text-red-500 transition-colors"
                                >
                                    Manage
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Wishlist Card 1 */}
                                <div className="bg-[#1a0505] border border-red-900/20 rounded-2xl overflow-hidden group">
                                    <div className="relative h-48 bg-black overflow-hidden">
                                        <Image
                                            src="/images/gallery_1.png"
                                            alt="Porsche"
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-lg cursor-pointer hover:bg-black/70 transition-colors">
                                            <Heart className="w-4 h-4 text-red-600 fill-red-600" />
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-black text-lg text-white">
                                                Porsche 911 GT3 RS
                                            </h4>
                                            <span className="text-red-600 font-black">
                                                $223,000
                                            </span>
                                        </div>
                                        <div className="text-white/40 text-xs font-medium flex items-center gap-2">
                                            <span>2024</span>
                                            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                            <span>0 Miles</span>
                                            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                            <span>Automatic</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Wishlist Card 2 */}
                                <div className="bg-[#1a0505] border border-red-900/20 rounded-2xl overflow-hidden group">
                                    <div className="relative h-48 bg-black overflow-hidden">
                                        <Image
                                            src="/images/apex_main.png"
                                            alt="Tesla"
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-lg cursor-pointer hover:bg-black/70 transition-colors">
                                            <Heart className="w-4 h-4 text-red-600 fill-red-600" />
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-black text-lg text-white">
                                                Tesla Model S Plaid
                                            </h4>
                                            <span className="text-red-600 font-black">
                                                $89,990
                                            </span>
                                        </div>
                                        <div className="text-white/40 text-xs font-medium flex items-center gap-2">
                                            <span>2023</span>
                                            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                            <span>1,200 Miles</span>
                                            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                            <span>Electric</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Footer inside main content area */}
                    <footer className="max-w-5xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
                        <div className="flex items-center gap-2">
                            <Car className="w-4 h-4 text-red-600" />
                            <span className="font-bold text-white">
                                LuxeAuto Dashboard
                            </span>
                        </div>
                        <div className="flex items-center gap-6 text-white/40">
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
                            <Link
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Support Center
                            </Link>
                        </div>
                        <div className="text-white/20">
                            © 2024 LuxeAuto Inc. All rights reserved.
                        </div>
                    </footer>
                </div>
            </div>
        </main>
    );
}

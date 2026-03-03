    import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {
    LayoutGrid,
    Heart,
    Car,
    CalendarDays,
    Settings2,
    LogOut,
    Zap,
    Gauge,
    Wind,
    Weight,
    Trash2,
    Plus,
    Download,
    GitCompare,
    Crown,
    ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Favorites | Luxe Motors",
    description: "Your dream collection of luxury supercars.",
};

const wishlistCars = [
    {
        id: 1,
        name: "Ferrari SF90 Stradale",
        year: "2024",
        color: "Maranello Red",
        status: "IN STOCK",
        statusColor:
            "bg-green-900/60 text-green-400 border border-green-700/30",
        price: "$524,814",
        image: "/images/gallery_1.png",
        specs: [
            {label: "POWER", value: "1000 HP", icon: Zap},
            {label: "0-100 KM/H", value: "2.5 SEC", icon: Gauge},
            {label: "TOP SPEED", value: "340 KM/H", icon: Wind},
        ],
    },
    {
        id: 2,
        name: "Lamborghini Revuelto",
        year: "2024",
        color: "Giallo Argo",
        status: "COMING SOON",
        statusColor: "bg-zinc-900/60 text-white/60 border border-white/10",
        price: "$608,358",
        image: "/images/gallery_2.png",
        specs: [
            {label: "POWER", value: "1015 HP", icon: Zap},
            {label: "0-100 KM/H", value: "2.5 SEC", icon: Gauge},
            {label: "ENGINE", value: "V12 HYBRID", icon: Wind},
        ],
    },
    {
        id: 3,
        name: "Porsche 911 GT3 RS",
        year: "2022",
        color: "Ice Grey Metallic",
        status: "LIMITED",
        statusColor: "bg-red-900/60 text-red-400 border border-red-700/30",
        price: "$241,300",
        image: "/images/gallery_3.png",
        specs: [
            {label: "POWER", value: "525 HP", icon: Zap},
            {label: "0-100 KM/H", value: "3.2 SEC", icon: Gauge},
            {label: "WEIGHT", value: "1450 KG", icon: Weight},
        ],
    },
];

export default function FavoritesPage() {
    return (
        <main className="min-h-screen bg-[#110404] text-white selection:bg-red-700 selection:text-white font-sans flex flex-col">
            {/* Custom Navbar for inner pages */}
            {/* <nav className="flex items-center justify-between px-8 py-4 bg-[#1a0505] border-b border-white/5 sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-red-800 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500 flex items-center justify-center">
                        <span className="transform -rotate-45 group-hover:-rotate-90 transition-transform duration-500 text-white font-black text-xs">
                            L
                        </span>
                    </div>
                    <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap">
                        LUXE <span className="text-red-700">MOTORS</span>
                    </span>
                </Link>

                <div className="flex items-center gap-6">
                    <Link
                        href="/favorites"
                        className="text-red-500 transition-colors"
                    >
                        <Heart className="w-5 h-5 fill-red-600" />
                    </Link>
                    <Link
                        href="/cart"
                        className="text-white/60 hover:text-white transition-colors"
                    >
                        <Car className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/dashboard"
                        className="bg-white/10 p-1 rounded-full hover:bg-red-800 transition-all duration-300"
                    >
                        <div className="w-7 h-7 bg-zinc-800 rounded-full overflow-hidden border border-white/10 flex items-center justify-center">
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-900 to-black text-[10px] font-bold">
                                JD
                            </div>
                        </div>
                    </Link>
                </div>
            </nav> */}
            <Navbar/>

            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-60 bg-[#160404] border-r border-white/5 hidden lg:flex flex-col shrink-0">
                    {/* Section: MAIN MENU */}
                    <div className="px-4 pt-8 pb-4">
                        <p className="text-[9px] font-black uppercase tracking-[3px] text-white/25 px-3 mb-3">
                            MAIN MENU
                        </p>
                        <div className="flex flex-col gap-1">
                            <Link
                                href="/dashboard"
                                className="flex items-center gap-3 text-white/50 hover:text-white px-3 py-3 rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
                            >
                                <LayoutGrid className="w-4 h-4" />
                                Showroom
                            </Link>
                            <Link
                                href="/favorites"
                                className="flex items-center gap-3 bg-red-700 text-white px-3 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-red-900/20"
                            >
                                <Heart className="w-4 h-4 fill-white" />
                                Favorites
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 text-white/50 hover:text-white px-3 py-3 rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
                            >
                                <Car className="w-4 h-4" />
                                My Garage
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 text-white/50 hover:text-white px-3 py-3 rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
                            >
                                <CalendarDays className="w-4 h-4" />
                                Track Days
                            </Link>
                        </div>
                    </div>

                    <div className="px-4 pb-4 mt-4">
                        <p className="text-[9px] font-black uppercase tracking-[3px] text-white/25 px-3 mb-3">
                            ACCOUNT
                        </p>
                        <div className="flex flex-col gap-1">
                            <Link
                                href="#"
                                className="flex items-center gap-3 text-white/50 hover:text-white px-3 py-3 rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
                            >
                                <Settings2 className="w-4 h-4" />
                                Settings
                            </Link>
                            <Link
                                href="/login"
                                className="flex items-center gap-3 text-white/50 hover:text-red-500 px-3 py-3 rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </Link>
                        </div>
                    </div>

                    {/* Membership Card */}
                    <div className="mt-auto m-4 bg-gradient-to-br from-[#2a0808] to-[#3a0808] border border-red-900/30 rounded-2xl p-5 shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <Crown className="w-3.5 h-3.5 text-red-500" />
                            <p className="text-[9px] font-black uppercase tracking-[2px] text-red-500">
                                MEMBERSHIP
                            </p>
                        </div>
                        <p className="font-black text-lg text-white mb-4">
                            Veloce Club
                        </p>
                        <button className="w-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-[10px] font-black uppercase tracking-[2px] py-2.5 rounded-lg transition-colors">
                            UPGRADE
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto p-7 md:p-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-white/30 mb-8">
                        <Link
                            href="/"
                            className="hover:text-white transition-colors"
                        >
                            HOME
                        </Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white/60">WISHLIST</span>
                    </div>

                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3 uppercase">
                                Your Dream Collection
                            </h1>
                            <p className="text-white/40 text-sm font-medium max-w-xl leading-relaxed">
                                Manage and refine your curated selection of the
                                world&apos;s most exclusive supercars.
                                High-performance engineering made tangible,
                                easier.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-bold tracking-wide transition-colors">
                                <Download className="w-4 h-4" />
                                Export List
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-600 text-xs font-bold tracking-wide transition-colors shadow-lg shadow-red-900/20">
                                <GitCompare className="w-4 h-4" />
                                Compare All
                            </button>
                        </div>
                    </div>

                    {/* Cars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {wishlistCars.map((car) => (
                            <div
                                key={car.id}
                                className="bg-[#1a0505]/80 border border-red-900/20 hover:border-red-900/40 rounded-3xl overflow-hidden transition-all duration-300 group flex flex-col"
                            >
                                {/* Image */}
                                <div className="relative h-52 bg-black overflow-hidden">
                                    <Image
                                        src={car.image}
                                        alt={car.name}
                                        fill
                                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Status Badge */}
                                    <div
                                        className={`absolute bottom-3 left-3 text-[9px] font-black uppercase tracking-[2px] px-2.5 py-1 rounded-md ${car.statusColor}`}
                                    >
                                        {car.status}
                                    </div>
                                    {/* Fav Heart */}
                                    <button className="absolute top-3 right-3 w-9 h-9 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:bg-black/70 transition-colors shadow-lg">
                                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col gap-5 flex-1">
                                    {/* Name & Price */}
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-lg font-black uppercase tracking-tight text-white leading-tight">
                                                {car.name}
                                            </h3>
                                            <p className="text-red-700 text-xs font-semibold mt-1">
                                                {car.year} • {car.color}
                                            </p>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <p className="text-[10px] text-white/30 font-bold uppercase tracking-wider mb-0.5">
                                                STARTING AT
                                            </p>
                                            <p className="text-red-500 font-black text-lg">
                                                {car.price}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Specs */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {car.specs.map((spec, idx) => {
                                            const Icon = spec.icon;
                                            return (
                                                <div
                                                    key={idx}
                                                    className="bg-[#0d0101]/60 rounded-xl p-3 border border-red-900/10"
                                                >
                                                    <p className="text-[8px] font-black uppercase tracking-[1.5px] text-white/30 mb-1.5 flex items-center gap-1">
                                                        <Icon className="w-2.5 h-2.5" />
                                                        {spec.label}
                                                    </p>
                                                    <p className="text-white font-black text-sm leading-none">
                                                        {spec.value}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-3 mt-auto">
                                        <button className="flex-1 bg-red-700 hover:bg-red-600 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-[2px] transition-colors shadow-lg shadow-red-900/20">
                                            Configure
                                        </button>
                                        <button className="w-11 h-11 bg-white/5 hover:bg-red-900/30 border border-white/10 hover:border-red-900/40 rounded-xl flex items-center justify-center transition-colors text-white/40 hover:text-red-500">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Add Next Dream CTA card */}
                        <div className="bg-[#1a0505]/40 border border-dashed border-red-900/20 hover:border-red-900/40 rounded-3xl flex flex-col items-center justify-center p-10 gap-5 transition-all group cursor-pointer min-h-[400px]">
                            <div className="w-14 h-14 rounded-full bg-red-900/20 border border-red-900/20 group-hover:bg-red-900/30 flex items-center justify-center transition-colors">
                                <Plus className="w-6 h-6 text-red-700" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-black text-lg uppercase tracking-tight text-white mb-2">
                                    Add Your Next Dream
                                </h3>
                                <p className="text-white/40 text-sm font-medium">
                                    Browse our latest inventory
                                    <br />
                                    and expand your collection.
                                </p>
                            </div>
                            <Link
                                href="/inventory"
                                className="px-6 py-2.5 border border-red-900/30 hover:bg-red-900/20 rounded-xl text-[10px] font-black uppercase tracking-[2px] text-white/60 hover:text-white transition-colors"
                            >
                                Browse Showroom
                            </Link>
                        </div>
                    </div>

                    {/* Footer Stats Bar */}
                    <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-center gap-10">
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-[2px] text-white/30 mb-1">
                                    COLLECTION VALUE
                                </p>
                                <p className="text-xl font-black text-white">
                                    $1,374,472
                                </p>
                            </div>
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-[2px] text-white/30 mb-1">
                                    TOTAL PERFORMANCE
                                </p>
                                <p className="text-xl font-black text-red-600">
                                    2,540 HP Combined
                                </p>
                            </div>
                        </div>
                        <p className="text-[10px] text-white/20 font-medium italic">
                            All prices subject to final configuration and market
                            availability.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

import Image from "next/image";
import Link from "next/link";
import {
    Trash2,
    ArrowLeft,
    CreditCard,
    ShieldCheck,
    Globe,
    Headphones,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cartItems = [
    {
        id: 1,
        name: "2024 Grand Tourer V12",
        specs: "Midnight Black Interior • Performance Pack",
        price: "$215,000",
        status: "IN STOCK",
        image: "/images/gallery_3.png", // reusing existing image
    },
    {
        id: 2,
        name: "Carbon Fiber Aeropack",
        specs: "Factory Installed • Lightweight Series",
        price: "$12,500",
        status: "CUSTOM",
        image: "/images/gallery_2.png",
    },
    {
        id: 3,
        name: "Bespoke Interior Quilt",
        specs: "Crimson Nappa Leather • Contrast Stitching",
        price: "$4,200",
        status: "PRE-ORDER",
        image: "/images/gallery_1.png",
    },
];

export default function CartPage() {
    return (
        <main className="min-h-screen bg-[#1a0808] text-white selection:bg-red-700 selection:text-white font-sans overflow-x-hidden flex flex-col">
            <Navbar />

            <div className="flex-1 container mx-auto px-8 pt-32 pb-24">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        Your Selection
                    </h1>
                    <p className="text-white/50 text-[15px] font-medium">
                        Review your luxury vehicles and bespoke configurations
                        before checkout.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-16">
                    {/* Left side: Cart Items */}
                    <div className="flex-[3] flex flex-col gap-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#240b0b]/60 border border-red-900/10 rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative group hover:bg-[#240b0b] transition-colors"
                            >
                                {/* Image */}
                                <div className="w-full sm:w-48 h-28 relative rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-black text-white tracking-tight mb-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-white/40 text-[13px] font-medium mb-4">
                                        {item.specs}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xl font-black text-red-600">
                                            {item.price}
                                        </span>
                                        <span
                                            className={`text-[9px] font-black uppercase tracking-[2px] px-2 py-1 rounded-sm ${
                                                item.status === "IN STOCK"
                                                    ? "bg-red-900/30 text-red-500"
                                                    : item.status === "CUSTOM"
                                                      ? "bg-red-900/40 text-red-400"
                                                      : "bg-red-950/50 text-red-700"
                                            }`}
                                        >
                                            {item.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Delete Button */}
                                <button className="absolute sm:relative top-4 right-4 sm:top-auto sm:right-auto text-white/30 hover:text-red-500 transition-colors">
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        ))}

                        <div className="mt-4">
                            <Link
                                href="/inventory"
                                className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 font-bold text-sm tracking-wide transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Continue Shopping
                            </Link>
                        </div>
                    </div>

                    {/* Right side: Order Summary */}
                    <div className="flex-[2] lg:max-w-[420px]">
                        <div className="bg-[#220a0a]/80 border border-red-900/15 rounded-[32px] p-8 lg:p-10 sticky top-32 shadow-2xl">
                            <h2 className="text-2xl font-black text-white tracking-tight mb-10">
                                Order Summary
                            </h2>

                            <div className="flex flex-col gap-5 text-sm font-medium text-white/60 mb-8">
                                <div className="flex items-center justify-between">
                                    <span>Subtotal</span>
                                    <span className="text-white/80">
                                        $231,700.00
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Luxury Tax (3%)</span>
                                    <span className="text-white/80">
                                        $6,951.00
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Destination Charges</span>
                                    <span className="text-white/80">
                                        $2,500.00
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Title & Registration</span>
                                    <span className="text-white/80">
                                        $850.00
                                    </span>
                                </div>
                            </div>

                            <div className="border-t border-red-900/20 pt-8 mb-10">
                                <div className="text-red-700 text-[10px] font-black uppercase tracking-[3px] mb-2">
                                    Total Payable
                                </div>
                                <div className="text-4xl font-black text-white tracking-tight">
                                    $242,001.00
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mb-10">
                                <button className="bg-red-700 hover:bg-red-600 text-white py-4 px-6 rounded-xl text-[11px] font-black uppercase tracking-[3px] flex items-center justify-between gap-3 transition-all active:scale-[0.98] shadow-lg shadow-red-900/20">
                                    <span>Proceed to Checkout</span>
                                    <CreditCard className="w-5 h-5" />
                                </button>
                                <button className="bg-transparent border border-red-900/30 hover:bg-[#2b0d0d] text-white py-4 px-6 rounded-xl text-[11px] font-black uppercase tracking-[3px] flex items-center justify-center transition-all">
                                    Request Finance Quote
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-6 text-white/30">
                                <ShieldCheck className="w-5 h-5 hover:text-white/60 transition-colors cursor-help" />
                                <Globe className="w-5 h-5 hover:text-white/60 transition-colors cursor-help" />
                                <Headphones className="w-5 h-5 hover:text-white/60 transition-colors cursor-help" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}

import type {Metadata} from "next";
import Link from "next/link";
import {Gem, Mail, Lock, Eye, Check} from "lucide-react";

export const metadata: Metadata = {
    title: "Login | LuxeAuto",
    description: "Access your luxury vehicle portal.",
};

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[#0d0202] text-white selection:bg-red-700 selection:text-white font-sans overflow-hidden flex flex-col relative">
            {/* Background Effects */}
            {/* Base Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(140,0,0,0.15),transparent_60%)] pointer-events-none z-0" />

            {/* Diagonal Lines Effect */}
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-20"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 4px,
                        rgba(255, 0, 0, 0.05) 5px,
                        rgba(255, 0, 0, 0.05) 6px
                    )`,
                }}
            />

            <div className="flex-1 container mx-auto px-8 flex flex-col z-10">
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left Column: Brand & Copy */}
                    <div className="flex flex-col justify-center h-full pt-12 lg:pt-0 max-w-md">
                        {/* Logo Mark */}
                        <div className="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-red-900/20">
                            <Gem className="w-6 h-6 text-white" />
                        </div>

                        {/* Brand Name */}
                        <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                            <span className="text-white block">LUXE</span>
                            <span className="text-red-700 block mt-[-4px]">
                                AUTO
                            </span>
                        </h1>

                        <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed mb-16">
                            Experience the next generation of luxury digital
                            management. Secure, elegant, and uncompromising.
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-12">
                            <div>
                                <div className="text-3xl font-black mb-1">
                                    12k+
                                </div>
                                <div className="text-white/40 text-[10px] font-black uppercase tracking-[2px]">
                                    MEMBERS
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-black mb-1">
                                    99.9%
                                </div>
                                <div className="text-white/40 text-[10px] font-black uppercase tracking-[2px]">
                                    UPTIME
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Login Card */}
                    <div className="flex items-center justify-center lg:justify-end pb-12 lg:pb-0">
                        <div className="w-full max-w-[480px] bg-[#160404]/90 backdrop-blur-xl border border-red-900/20 rounded-[32px] p-8 md:p-12 shadow-2xl">
                            {/* Tabs */}
                            <div className="flex items-center gap-8 mb-10 border-b border-white/5">
                                <button className="text-[11px] font-black uppercase tracking-[2px] pb-4 border-b-2 border-red-700 text-white transition-colors">
                                    LOGIN
                                </button>
                                <button className="text-[11px] font-black uppercase tracking-[2px] pb-4 border-b-2 border-transparent text-white/30 hover:text-white transition-colors">
                                    REGISTER
                                </button>
                            </div>

                            {/* Welcome Text */}
                            <div className="mb-8">
                                <h2 className="text-3xl font-black tracking-tight mb-2">
                                    Welcome Back
                                </h2>
                                <p className="text-white/40 text-sm font-medium">
                                    Please enter your details to access your
                                    vault.
                                </p>
                            </div>

                            {/* Form */}
                            <form className="flex flex-col gap-6">
                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[2px] text-white/60 ml-1">
                                        EMAIL ADDRESS
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                            <Mail className="w-4 h-4 text-white/40" />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="name@exclusive.com"
                                            className="w-full bg-[#0d0202] border border-red-900/20 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-red-700 transition-colors placeholder:text-white/20 text-white"
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between ml-1">
                                        <label className="text-[10px] font-black uppercase tracking-[2px] text-white/60">
                                            PASSWORD
                                        </label>
                                        <Link
                                            href="#"
                                            className="text-[9px] font-black uppercase tracking-[1px] text-red-700 hover:text-red-600 transition-colors"
                                        >
                                            FORGOT?
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                            <Lock className="w-4 h-4 text-white/40" />
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="w-full bg-[#0d0202] border border-red-900/20 rounded-xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:border-red-700 transition-colors placeholder:text-white/20 text-white tracking-widest"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-4 flex items-center text-white/40 hover:text-white transition-colors"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Remember Me */}
                                <div className="flex items-center gap-3 mt-1">
                                    <div className="w-4 h-4 rounded bg-[#0d0202] border border-red-900/30 flex items-center justify-center cursor-pointer">
                                        {/* <Check className="w-3 h-3 text-red-700" /> uncomment to check */}
                                    </div>
                                    <span className="text-white/50 text-xs font-medium cursor-pointer">
                                        Stay signed in for 30 days
                                    </span>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="button"
                                    className="w-full bg-[#900000] hover:bg-red-700 text-white font-black text-[11px] uppercase tracking-[3px] py-4 rounded-xl transition-all shadow-lg mt-2"
                                >
                                    ENTER VAULT
                                </button>

                                {/* Divider */}
                                <div className="relative flex items-center py-4">
                                    <div className="flex-grow border-t border-white/5"></div>
                                    <span className="flex-shrink-0 mx-4 text-white/20 text-[9px] font-black uppercase tracking-[2px]">
                                        OR CONTINUE WITH
                                    </span>
                                    <div className="flex-grow border-t border-white/5"></div>
                                </div>

                                {/* Social Login Options */}
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        className="bg-[#0d0202] hover:bg-[#1a0505] border border-red-900/20 rounded-xl py-3.5 flex items-center justify-center gap-3 transition-colors"
                                    >
                                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                                        <span className="text-[10px] font-black uppercase tracking-[2px] text-white">
                                            GOOGLE
                                        </span>
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-[#0d0202] hover:bg-[#1a0505] border border-red-900/20 rounded-xl py-3.5 flex items-center justify-center gap-3 transition-colors"
                                    >
                                        {/* Simple Apple Icon Mock inside a div */}
                                        <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                                            <span className="text-[8px] text-white">
                                                
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[2px] text-white">
                                            APPLE
                                        </span>
                                    </button>
                                </div>

                                {/* Footer Note */}
                                <p className="text-center text-white/30 text-[10px] leading-relaxed mt-4">
                                    Protected by high-level encryption. By
                                    entering, you agree to our{" "}
                                    <Link
                                        href="#"
                                        className="text-red-700 hover:text-red-600 transition-colors"
                                    >
                                        Terms of Service
                                    </Link>
                                    .
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Footer */}
            <footer className="absolute bottom-8 w-full text-center z-10 pointer-events-none">
                <p className="text-white/20 text-[9px] font-black uppercase tracking-[3px]">
                    © 2024 LUXEAUTO INDUSTRIES • ALL RIGHTS RESERVED
                </p>
            </footer>
        </main>
    );
}

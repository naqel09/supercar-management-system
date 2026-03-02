import Navbar from "@/components/beranda/Navbar";
import Hero from "@/components/beranda/Hero";
import Features from "@/components/beranda/Features";
import NewArrivals from "@/components/beranda/NewArrivals";
import Collections from "@/components/beranda/Collections";
import CTA from "@/components/beranda/CTA";
import Footer from "@/components/beranda/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0a0101] text-white font-sans selection:bg-red-700 selection:text-white">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.15),transparent_70%)] pointer-events-none"></div>
            <Navbar />
            <Hero />
            <Features />
            <NewArrivals />
            <Collections />
            <CTA />
            <Footer />
        </main>
    );
}

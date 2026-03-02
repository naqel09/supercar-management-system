import type {Metadata} from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutGallery from "@/components/about/AboutGallery";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
    title: "About Us | LuxeAuto",
    description:
        "Discover the story of LuxeAuto — three decades of curating the world's most exclusive luxury automobiles for discerning collectors.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#1a0505] text-white selection:bg-red-700 selection:text-white font-sans overflow-x-hidden">
            {/* Background gradient decor */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(180,0,0,0.12),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(140,0,0,0.10),transparent_60%)] pointer-events-none -z-10" />

            <Navbar />

            <AboutHero />
            <AboutMission />
            <AboutTimeline />
            <AboutGallery />
            <AboutCTA />

            <Footer />
        </main>
    );
}

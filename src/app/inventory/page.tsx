import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InventoryHeader from "@/components/inventory/InventoryHeader";
import FilterBar from "@/components/inventory/FilterBar";
import ProductGrid from "@/components/inventory/ProductGrid";
import Newsletter from "@/components/inventory/Newsletter";

export default function InventoryPage() {
    return (
        <main className="min-h-screen bg-[#110101] text-white selection:bg-red-700 selection:text-white font-sans">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,0,0,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,0,0,0.1),transparent_50%)] pointer-events-none"></div>

            <Navbar />
            <InventoryHeader />
            <FilterBar />
            <ProductGrid />
            <Newsletter />
            <Footer />
        </main>
    );
}

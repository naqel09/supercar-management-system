import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductSpecs from "@/components/product/ProductSpecs";
import OrderSidebar from "@/components/product/OrderSidebar";
import ProductContent from "@/components/product/ProductContent";
import Highlights from "@/components/product/Highlights";

export default function ProductDetailsPage({params}: {params: {slug: string}}) {
    return (
        <main className="min-h-screen bg-[#110101] text-white selection:bg-red-700 selection:text-white font-sans overflow-x-hidden">
            {/* Background Decor */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,0,0,0.05),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,0,0,0.05),transparent_50%)] pointer-events-none -z-10"></div>

            <Navbar />

            <ProductHero />

            <div className="container mx-auto px-8 -mt-24 relative z-20">
                <ProductSpecs />
            </div>

            <div className="container mx-auto px-8 py-12 flex flex-col lg:flex-row gap-20">
                <div className="flex-1">
                    <ProductContent />
                </div>
                <div className="lg:w-[450px]">
                    <div className="sticky top-32">
                        <OrderSidebar />
                    </div>
                </div>
            </div>

            <Highlights />

            {/* Map Section Mockup */}
            <section className="px-8 pb-32">
                <div className="container mx-auto overflow-hidden rounded-[50px] h-[500px] border border-red-950/20 bg-[#160404]/40 backdrop-blur-3xl shadow-2xl relative group cursor-pointer hover:border-red-900/30 transition-all flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('/images/gallery_3.png')] opacity-20 grayscale sepia group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative z-10 p-8 text-center bg-black/40 backdrop-blur-md rounded-2xl border border-red-900/20">
                        <h4 className="text-red-700 text-[10px] font-black uppercase tracking-[4px] mb-2 shadow-sm">
                            Main Factory & Showroom
                        </h4>
                        <p className="text-white text-lg font-black uppercase tracking-widest shadow-lg">
                            Maralleno, Italy
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

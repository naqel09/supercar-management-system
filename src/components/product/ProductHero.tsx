import Image from "next/image";

export default function ProductHero() {
    return (
        <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white px-8">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/apex_main.png"
                    alt="Apex Carbon RS Main"
                    fill
                    className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110101] via-transparent to-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent md:block hidden"></div>
            </div>

            {/* Main Content Info */}
            <div className="relative z-10 container mx-auto flex flex-col items-start justify-end h-full pb-36">
                <div className="bg-red-800 text-white text-[10px] font-black uppercase tracking-[2px] px-3 py-1 rounded inline-block mb-6 shadow-lg">
                    2024 NEW RELEASE
                </div>

                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-4 text-shadow-xl">
                    APEX CARBON RS
                </h1>

                <p className="text-red-700 font-bold text-lg md:text-xl uppercase tracking-widest italic drop-shadow-md">
                    The Ultimate Expression of Kinetic Art
                </p>
            </div>
        </section>
    );
}

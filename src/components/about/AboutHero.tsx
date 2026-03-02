import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-black text-white">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/apex_main.png"
                    alt="About Hero"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0101] via-[#0d0101]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-8">
                <div className="max-w-3xl">
                    {/* Label */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-px bg-red-700" />
                        <span className="text-red-600 text-[9px] font-black uppercase tracking-[4px]">
                            Our Story
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] mb-8">
                        A Legacy of{" "}
                        <span className="text-red-600 italic font-black">
                            Excellence
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white/50 text-base font-medium leading-relaxed max-w-xl">
                        Where automotive mastery meets unparalleled luxury. We
                        don&apos;t just sell cars; we curate masterpieces for
                        the discerning collector.
                    </p>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1a0505] to-transparent z-10" />
        </section>
    );
}

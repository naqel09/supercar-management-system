import Image from "next/image";

const stats = [
    {value: "30+", label: "Years of mastery"},
    {value: "8000+", label: "5-star reviews & clients"},
];

export default function AboutMission() {
    return (
        <section className="py-28 px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-[1.1] mb-8">
                            Redefining the standard
                            <br />
                            of automotive luxury.
                        </h2>

                        <p className="text-white/40 text-sm font-medium leading-[1.9] mb-6">
                            Since our inception, LuxeAuto has been dedicated to
                            the pursuit of automotive perfection. We believe
                            that a vehicle is more than just a means of
                            transport — it is an extension of one&apos;s
                            personality and an expression of achievement.
                        </p>
                        <p className="text-white/40 text-sm font-medium leading-[1.9] mb-12">
                            Our mission is to provide an environment where the
                            acquisition of a luxury vehicle is as refined as the
                            car itself. Every interaction is tailored, every
                            detail is optimized, and every client is treated
                            with the utmost prestige.
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-12">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-3xl font-black text-red-600 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-white/40 text-[10px] font-black uppercase tracking-[2px]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative h-[420px] rounded-3xl overflow-hidden border border-red-900/15 shadow-2xl shadow-red-950/20">
                        <Image
                            src="/images/gallery_2.png"
                            alt="Luxury showroom"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}

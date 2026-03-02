import ProductCard from "./ProductCard";

const cars = [
    {
        name: "Ferrari SF90 Stradale",
        price: "$524,815",
        type: "Hybrid Powertrain",
        hp: "986 HP",
        zeroToHundred: "2.5s",
        image: "/images/ferrari_sf90.png",
        isLimited: true,
    },
    {
        name: "Lamborghini Revuelto",
        price: "$608,358",
        type: "V12 Hybrid",
        hp: "1001 HP",
        zeroToHundred: "2.5s",
        image: "/images/hero.png", // Reusing hero image for now
    },
    {
        name: "McLaren Artura",
        price: "$237,500",
        type: "Plug-in Hybrid V6",
        hp: "671 HP",
        zeroToHundred: "3.0s",
        image: "/images/mclaren.png",
    },
    {
        name: "Porsche 911 GT3 RS",
        price: "$223,800",
        type: "Naturally Aspirated",
        hp: "518 HP",
        zeroToHundred: "3.2s",
        image: "/images/porsche.png",
    },
    {
        name: "Aston Martin Valhalla",
        price: "$800,000",
        type: "Hybrid V8",
        hp: "937 HP",
        zeroToHundred: "2.5s",
        image: "/images/track_monsters.png", // Using track monsters as placeholder
    },
    {
        name: "Bugatti Chiron Pur Sport",
        price: "$3,600,000",
        type: "Quad-Turbo W16",
        hp: "1479 HP",
        zeroToHundred: "2.3s",
        image: "/images/lamborghini.png", // Reusing green svj for now
    },
];

export default function ProductGrid() {
    return (
        <section className="px-8 pb-32 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {cars.map((car, index) => (
                    <ProductCard key={index} {...car} />
                ))}
            </div>
        </section>
    );
}

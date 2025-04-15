import Image from "next/image";
import PropertyCard from "@/app/components/PropertyCard/PropertyCard";
import StatsSection from "@/app/components/StatsSection/StatsSection";

export default function Hero() {
    return (
        <section className="w-full min-h-[80vh] flex flex-col lg:flex-row bg-white text-black px-6 py-12 relative">
            <div className="flex flex-col justify-center w-full lg:w-1/2 z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-left">
                    Buy, rent, or sell your property easily
                </h2>
                <p className="text-lg text-gray-600 mb-12 lg:mr-8 text-left">
                    A great platform to buy, sell, or even rent your properties without any commissions.
                </p>

                <div className="flex gap-12 justify-center">
                    <StatsSection awesomeSum="50k+" statsLabel="renters" />
                    <StatsSection awesomeSum="10k+" statsLabel="properties" />
                </div>
            </div>

            <div className="relative w-full lg:w-1/2 h-[25rem] lg:h-auto mt-12 lg:mt-0">
                <Image
                    src="/assets/mapBackground.webp"
                    alt="Hero background"
                    fill
                    className="object-cover rounded-xl"
                    priority
                />

                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 lg:-translate-x-1/4">
                    <PropertyCard
                        image="/assets/house1.webp"
                        title="Beverly Springfield"
                        location="2821 Lake Sevilla, Palm Harbor, TX"
                        price="$2,700 / month"
                    />
                </div>
            </div>
        </section>
    );
}
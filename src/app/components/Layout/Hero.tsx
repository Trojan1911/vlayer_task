import Image from "next/image";
import bgImage from "../../../../public/mapBackground.webp";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[80vh] flex flex-col lg:flex-row overflow-hidden">
            <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-6 md:px-12 py-16 bg-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Buy, rent or sell your property easily
                </h2>
                <p className="text-lg text-gray-600 max-w-md">
                    A great platform to buy, sell, or even rent your properties without any commissions.
                </p>
            </div>

            <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-auto">
                <Image
                    src={bgImage}
                    alt="Hero background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    );
}

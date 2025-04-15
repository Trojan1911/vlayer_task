import Image from "next/image";

type PropertyCardProps = {
    image: string;
    title: string;
    price: string;
    location: string;
};

export default function PropertyCard({ image, title, price, location }: PropertyCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-sm">
            <div className="relative h-48 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 48rem) 100vw, 33vw"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-500">{location}</p>
                <p className="text-lg font-bold text-indigo-600 mt-2">{price}</p>
            </div>
        </div>
    );
}

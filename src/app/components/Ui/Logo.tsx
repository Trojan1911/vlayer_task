import Image from "next/image";
import LogoImage from "../../../../public/assets/Logotype.webp"

type LogoProps = {
    logoWidth?: number | undefined;
    logoHeight?: number | undefined;
    altText: string;
};

export default function Logo({
                                 logoWidth = 100,
                                 logoHeight = undefined,
                                 altText,
                             }: LogoProps) {
    return (
        <Image
            width={logoWidth}
            height={logoHeight}
            src={LogoImage}
            alt={altText}
        />
    );
}
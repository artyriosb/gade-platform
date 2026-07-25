'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroImages } from "@/src/data/hero";
import { cn } from "@/lib/utils";

interface HeroImage {
    id: string;
    src: string;
    alt: string;
}

interface HeroCarouselProps {
    images: HeroImage[];
}

export default function HeroSlider({
    images,
}: HeroCarouselProps) {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <>
            {images.map((image, index) => (
                <Image
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={cn(
                        "absolute inset-0 object-cover transition-opacity duration-1000",
                        current === index ? "opacity-100" : "opacity-0"
                    )}
                />
            ))}
        </>
    );
}
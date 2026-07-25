import Hero from '@/components/sections/Home/Hero';
import Welcome from '@/components/sections/Home/Welcome';
import CTA from '@/components/sections/Home/CTA';
import FeaturedNews from '@/components/sections/Home/FeaturedNews';

export default function Home() {
    return (
        <>
            <Hero />
            <Welcome />
            <CTA />
            <FeaturedNews />

        </>
    );
}
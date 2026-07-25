import { Section, Container } from "../../ui";
import { CTAButton } from "../../ui/CTAButton";
import { HeroSlider } from "./HeroComponents";
import { heroImages } from "@/src/data/hero";



export default function Hero() {
    return (

        <Section className="p-0">
            
            <Container className="w-full h-screen px-0 flex flex-col items-center justify-center text-center relative">
                
                <HeroSlider images={heroImages}/>
                    <div
                    className="
                        absolute
                        inset-0
                        z-10

                        bg-linear-to-b
                        from-black/70
                        via-black/45
                        to-transparent
                        backdrop-blur-xs
                    "
                />
                <Container className=" relative z-20 flex h-full flex-col items-center justify-center text-center">
                    <div className="w-full flex items-center justify-center gap-4 relative">
                        <div className="h-px w-12 bg-primary"/>
                            <p className="uppercase tracking-[0.4] text-primary text-sm">
                                Igreja Missão Gade
                            </p>
                        <div className="h-px w-12 bg-primary"/>
                    </div>

                    <div className="w-full flex items-center justify-center p-4 relative">
                        <h1 className="text-6xl font-bold leading-wide">
                            Expressando o amor de Deus, <br />
                            vivendo Sua Palavra<br />
                            e manifestando o poder <br />
                            do Espírito Santo.

                        </h1>
                    </div>

                    <div className="w-full flex items-center justify-center mt-32 relative">
                        <CTAButton>
                            Peça sua oração
                        </CTAButton>
                    </div>
                </Container>
            </Container>
        </Section>
        
    );
}
import { Section, Container } from "@/components/ui"

export default function Welcome () {
    return (
        <Section className="w-full bg-linear-to-b from-gray-950 to-background">
            <Container className="flex flex-col gap-y-10">

                <div className="flex items-center justify-center">
                    <p className="text-2xl text-center">
                        Seja bem-vindo ao site oficial da Igreja Missão Gade.<br />
        
                        Em breve você poderá acompanhar nossos cultos,
        
                        eventos, ministérios e projetos missionários. 
                    </p>
                </div>

            

                <div className="flex flex-col gap-10">
                    <div>    
                        <h2 className="text-3xl font-semibold">
                            Citação do dia ✝️
                        </h2>
                        <div className="w-49 h-1 bg-linear-to-r from-inverse via-hover to-primary rounded-full mt-1"/>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="w-lg text-xl text-center">
                            Jesus não apenas nos salva para a eternidade - Ele entra na nossa história,
                             nos nossos dias comuns, e os transfoma.
                        </p>

                        <p className="uppercase font-xl font-semibold text-center">
                            timothy keller
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
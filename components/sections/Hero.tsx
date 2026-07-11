import { Button } from "../ui";

export default function Hero() {
    return (
                    <main className="flex flex-col min-h-screen items-center justify-center bg-gade-black px-6 text-gade-white">
                <div className="max-w-3xl text-center">

                    <div className="mb-8 flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-gade-gold"></div>

                            <p className="uppercase tracking-[0.4em] text-gade-gold text-sm">
                            Igreja Missão Gade
                            </p>

                        <div className="h-px w-12 bg-gade-gold"></div>
                    </div>

                  <h1 className="mb-6 text-5xl font-bold leading-tight">
                    Expressando o amor de Deus,
                    <br />
                    vivendo Sua Palavra
                    <br />e manifestando o poder do Espírito Santo.
                  </h1>

                  <p className="text-lg text-gade-gray">
                    Seja bem-vindo ao site oficial da Igreja Missão Gade.
                    Em breve você poderá acompanhar nossos cultos,
                    eventos, ministérios e projetos missionários. 
                  </p>             
                </div>

                <div className="flex max-w-max mt-6 gap-10 items-center justify-center">
                    <Button variant="outline" size="lg">
                        Conheça a Igreja
                    </Button>

                    <Button variant="primary" size="lg">
                        Pedidos de Oração
                    </Button>
                </div>
            </main>
    );
}
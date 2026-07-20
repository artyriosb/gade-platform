import { Button, Card, Container } from "../ui";

export default function Hero() {
    return (
                    <main className="flex flex-col min-h-screen items-center justify-center bg-background px-6 text-inverse">
                <div className="max-w-3xl text-center">

                    <div className="mb-8 flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-primary"></div>

                            <p className="uppercase tracking-[0.4em] text-primary text-sm">
                            Igreja Missão Gade
                            </p>

                        <div className="h-px w-12 bg-primary"></div>
                    </div>

                  <h1 className="mb-6 text-5xl font-bold leading-tight">
                    Expressando o amor de Deus,
                    <br />
                    vivendo Sua Palavra
                    <br />e manifestando o poder do Espírito Santo.
                  </h1>

                  <p className="text-lg text-secondary">
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
                <Container className="flex items-center">
                    <Card>
                        <h2 className="mb-4 text-3xl font-bold leading-tight">
                            Próximos Eventos
                        </h2>
                    </Card>

                    <Card>
                        <h2 className="mb-4 text-3xl font-bold leading-tight">
                            Últimas Notícias
                        </h2>
                    </Card>
                </Container>
            </main>
    );
}
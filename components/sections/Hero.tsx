import Image from "next/image";
import { Button, Container } from "../ui";
import 
{ 
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "../ui/Card";

export default function Hero() {
    return (
        
        <main className="w-full flex flex-col items-center justify-center text-inverse">
            
            <Container className="w-full h-162.5 flex flex-col items-center justify-center text-center relative">

            <Image src={"/herobg1.jpeg"} alt="Hero Background" fill={true} style={{objectFit: "cover", objectPosition: "absolute"}} />
            <div className="w-full h-full bg-black/80 absolute"/>


                <div className="w-full flex items-center justify-center gap-4 relative">
                    <div className="h-px w-12 bg-primary"/>
                        <p className="uppercase tracking-[0.4] text-primary text-sm">
                            Igreja Missão Gade
                        </p>
                    <div className="h-px w-12 bg-primary"/>
                </div>

                <div className="w-full flex items-center justify-center my-4 relative">
                    <h1 className="text-5xl font-bold leading-tight">
                        Expressando o amor de Deus, <br />
                        vivendo Sua Palavra<br />
                        e manifestando o poder do Espírito Santo.

                    </h1>
                </div>

                <div className="w-full flex items-center justify-center mt-32 gap-50 relative">
                    <Button variant="primary" size="lg">
                        Peça sua oração
                    </Button>
                </div>

            </Container>

            <Container className="h-37.5 flex justify-center mb-20">
                <div className="w-2/4 flex items-center justify-center my-4 re">
                    <p className="text-2xl text-center">
                        Seja bem-vindo ao site oficial da Igreja Missão Gade.<br />
        
                        Em breve você poderá acompanhar nossos cultos,
        
                        eventos, ministérios e projetos missionários. 
                    </p>
                </div>
            </Container>

            <Container className="flex flex-col mb-20">
                <h2 className="text-xl font-bold mx-34 mb-10">
                    Citação do dia ✝️
                </h2>
 
                <p className="text-center mb-4">
                    Jesus não apenas nos salva para a eternidade - Ele entra na nossa história,
                     nos nossos dias comuns, e os transfoma.
                </p>

                <p className="uppercase font-medium text-center">
                    timothy keller
                </p>
            </Container>
                
                        
            <Container className="w-full h-75 grid grid-cols-2 mx-20 gap-6 py-6">
                <Card className="p-2">
                    <CardHeader className="mt-3">
                        <CardTitle>Quem Somos!</CardTitle>

                        <CardDescription>
                            Conheça as nossas lideranças!
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="w-full h-6/12 p-6">
                        <p className="text-sm text-accent">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quidem vero delectus laboriosam voluptatibus perspiciatis, 
                            qui ullam, id eius quos molestiae aperiam fuga repudiandae. 
                            Tempora quia dolores architecto numquam, quis dolorem.
                        </p>
                    </CardContent>

                    <CardFooter className="flex justify-center mb-3">
                        <Button variant="primary" size="md">
                            Saiba Mais
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="p-2">
                    <CardHeader className="mt-3">
                        <CardTitle>Quem Somos!</CardTitle>

                        <CardDescription>
                            Conheça as nossas lideranças!
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="w-full h-6/12 p-6">
                        <p className="text-sm text-accent">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quidem vero delectus laboriosam voluptatibus perspiciatis, 
                            qui ullam, id eius quos molestiae aperiam fuga repudiandae. 
                            Tempora quia dolores architecto numquam, quis dolorem...
                        </p>
                    </CardContent>

                    <CardFooter className="flex justify-center mb-3">
                        <Button>
                            Saiba Mais
                        </Button>
                    </CardFooter>
                </Card>
            </Container>
                
        </main>

        
    );
}
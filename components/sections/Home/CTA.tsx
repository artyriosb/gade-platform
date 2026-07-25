import { Section, Container } from "@/components/ui"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter
} from "@/components/ui/Card"
import { TextLink } from "@/components/ui/TextLink"

export default function CTA () {
    return (
        <Section>
            <Container className="flex flex-col">

                <div className="flex flex-col mb-10">
                    <h2 className="text-3xl font-semibold">
                        Conheça a nossa igreja
                    </h2>
                    <div className="w-78 h-1 bg-linear-to-r from-inverse via-hover to-primary rounded-full mt-1" />
                </div>

                <div className="grid grid-cols-2 gap-10">

                    <Card className="p-6">
                        <CardHeader className="text-lg font-semibold pb-3">
                            <CardTitle>
                                Nossas lideranças
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center pb-4 mx-4">
                            <CardDescription>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus cumque sequi non odit! Accusantium, reprehenderit, 
                                quae maiores magnam fuga nemo consequuntur non unde provident 
                                nobis nisi dolorem, veritatis quisquam omnis.
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="mx-8">
                            <TextLink href="#">
                                Saiba Mais
                            </TextLink>
                        </CardFooter>
                    </Card>

                    <Card className="p-6">
                        <CardHeader className="text-lg font-semibold pb-3">
                            <CardTitle>
                                Nossas lideranças
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center pb-4 mx-4">
                            <CardDescription>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus cumque sequi non odit! Accusantium, reprehenderit, 
                                quae maiores magnam fuga nemo consequuntur non unde provident 
                                nobis nisi dolorem, veritatis quisquam omnis.
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="mx-8">
                            <TextLink href="#">
                                Saiba Mais
                            </TextLink>
                        </CardFooter>
                    </Card>

                </div>

            </Container>
        </Section>
    )
}
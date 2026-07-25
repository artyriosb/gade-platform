import { Section, Container } from "@/components/ui"
import { NewsCard } from "@/components/sections/News/NewsComponents"

export default function FeaturedNews() {
    return (

        <Section className="p-6">

            <Container className="flex flex-col mb-10">
                <h2 className="text-3xl font-semibold">
                    Últimas Notícias
                </h2>
                <div className="w-55 h-1 bg-linear-to-r from-inverse via-hover to-primary rounded-full" />
            </Container>

            <Container className=" w-full grid grid-cols-2 gap-10 my-6">
  
                <NewsCard
                    title="Reunião de casais"
                    description="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus cumque sequi non odit! Accusantium, reprehenderit, 
                        quae maiores magnam fuga nemo consequuntur non unde provident 
                        nobis nisi dolorem, veritatis quisquam omnis..."
                    image="/herobg3.jpeg"
                    href="#"
                    category="Noticia"
                />
    
                <NewsCard
                    title="Reunião de casais"
                    description="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus cumque sequi non odit! Accusantium, reprehenderit, 
                        quae maiores magnam fuga nemo consequuntur non unde provident 
                        nobis nisi dolorem, veritatis quisquam omnis..."
                    image="/herobg3.jpeg"
                    href="#"
                    category="Noticia"  
                />

                <NewsCard
                    title="Reunião de casais"
                    description="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus cumque sequi non odit! Accusantium, reprehenderit, 
                        quae maiores magnam fuga nemo consequuntur non unde provident 
                        nobis nisi dolorem, veritatis quisquam omnis..."
                    image="/herobg3.jpeg"
                    href="#"
                    category="Noticia"
                />

    
                <NewsCard
                        title="Reunião de casais"
                    description="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus cumque sequi non odit! Accusantium, reprehenderit, 
                        quae maiores magnam fuga nemo consequuntur non unde provident 
                    nobis nisi dolorem, veritatis quisquam omnis..."
                    image="/herobg3.jpeg"
                    href="#"
                    category="Noticia"
                />
            
            </Container>
        </Section>
    )   
}   
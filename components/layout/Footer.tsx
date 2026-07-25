import { church } from "@/src/data/church"
import { Container } from "../ui"
import { NavLink } from "../navigation";


export default function Footer () {
    const currentYear = new Date().getFullYear();

    return  (
        <footer className="border-t border-secondary/20 bg-background">
            <Container className="py-10">
                <h2 className="mb-8 text-2xl font-bold">
                    {church.name}
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {/*Endereço*/}
                    <section>
                        <h3 className="mb-2 font-semibold text-primary">
                            Endereço
                        </h3>

                        <address className="not-italic leading-relaxed text-secondary">
                            {church.address.street}
                            <br />
                            {church.address.district}
                            <br />
                            {church.address.city} - {church.address.state}
                            <br />
                            {church.address.zipCode}
                        </address>

                        <h3 className="mt-6 mb-2 font-semibold text-primary">
                            Telefone
                        </h3>

                        <p className="text-secondary">
                            {church.contact.phone}
                        </p>
                        <p className="text-secondary">
                            {church.contact.email}
                        </p>
                    </section>

                    {/*Horários*/}
                    <section>
                        <h3 className="mb-2 font-semibold text-primary">
                            Horários
                        </h3>

                        <ul className="space-y-1 text-secondary">
                            {church.schedule.map((service) => (
                                <li key={service.day}>
                                    {service.day} - {service.time}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/*Rede Sociais*/}

                    <section>
                        <h3 className="mb-2 font-semibold text-primary">
                            Redes Sociais
                        </h3>

                        <nav className="flex flex-col gap-2">
                            <NavLink
                                href={church.social.instagram.url}
                                variant={"footer"}
                            >
                                Instagram
                            </NavLink>

                            <NavLink
                                href={church.social.youtube.url}
                                variant={"footer"}
                            >
                                YouTube
                            </NavLink>
                        </nav>
                    </section>
                </div>

                {/*Copyright*/}

                <div className="mt-10 border-t border-secondary/20 pt-6 text-center text-sm text-secondary">
                    © {currentYear} Igreja Missão Gade. Todos os direitos reservados.     
                </div>
            </Container>
        </footer>
    );
};
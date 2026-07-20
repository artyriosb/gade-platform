import Logo from "./Logo";
import { NavBar } from "../navigation";
import { NavLink } from "../navigation"

export default function Header() {
    return (
        <header className="w-full border-b border-brand-inverse/10 bg-brand-accent">
            <div className="mx-auto flex max-w7=xl items-center justify-between px-10 py-5">
                <Logo />
                    <NavBar>
                        
                        <NavLink href="/inicio">
                            Início
                        </NavLink>

                        <NavLink href="/ministries">
                            Ministérios
                        </NavLink>

                        <NavLink href="/news">
                            Notícias
                        </NavLink>

                        <NavLink href="/about">
                            Sobre
                        </NavLink>

                        <NavLink href="/contact">
                            Contato
                        </NavLink>
        
                    </NavBar>
                
            </div>
        </header>
    );
}
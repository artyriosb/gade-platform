import Logo from "./Logo";
import { NavBar } from "../navigation";
import { NavLink } from "../navigation"

export default function Header() {
    return (
        <header className="w-full bg-linear-to-b from-background to-gray-950 p-4">
            <div className="mx-10 flex items-center justify-between">
                <Logo />
                    <NavBar className="text-md">
                        
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
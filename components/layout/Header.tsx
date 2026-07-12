import Link from "next/link";
import Logo from "./Logo";
import { NavBar } from "../navigation";

export default function Header() {
    return (
        <header className="w-full border-b border-gade-white/10 bg-gade-black">
            <div className="mx-auto flex max-w7=xl items-center justify-between px-10 py-5">
                <Logo />
                    <NavBar>
                        <Link href="#" className="transition hover:text-gade-gold">Inicio</Link>
                        <Link href="#" className="transition hover:text-gade-gold">Sobre</Link>
                        <Link href="#" className="transition hover:text-gade-gold">Ministérios</Link>
                        <Link href="#" className="transition hover:text-gade-gold">Notícias</Link>
                        <Link href="#" className="transition hover:text-gade-gold">Contato</Link>
                    </NavBar>
                
            </div>
        </header>
    );
}
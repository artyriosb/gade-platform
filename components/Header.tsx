import Logo from "./Logo";

export default function Header() {
    return (
        <header className="w-full border-b border-white/10 bg-gade-black">
            <div className="mx-auto flex max-w7xl items-center justify-between px-6 py-5">
                <Logo />

                <nav className="hidden gap-8 text-sm text-gade-gray md:flex">
                    <a href="#" className="transition hover:text-gade-gold">
                        Inicio
                    </a>

                    <a href="#" className="transition hover:text-gade-gold">
                        Sobre
                    </a>

                    <a href="#" className="transition hover:text-gade-gold">
                        Ministérios
                    </a>

                    <a href="#" className="transition hover:text-gade-gold">
                        Notícias
                    </a>

                    <a href="#" className="transition hover:text-gade-gold">
                        Contato
                    </a>
                </nav>
            </div>
        </header>
    );
}
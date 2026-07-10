import Header from '@/components/Header';

export default function Home() {
    return (
        <>
            <Header />

            <main className="flex min-h-screen items-center justify-center bg-gade-black px-6 text-gade-white">
                <div className="max-w-3xl text-center">
                  <p className="mb-3 text-sm uppercase tracking-[0.4em] text-gade-gold">
                    Igreja Missão Gade
                  </p>

                  <h1 className="mb-6 text-5xl font-bold leading-tight">
                    Expressando o amor de Deus,
                    <br />
                    vivendo Sua Palavra
                    <br />e manisfestando o poder do Espírito Santo.
                  </h1>

                  <p className="text-lg text-gade-gray">
                    Seja bem-vindo ao site oficial da Igreja Missão Gade.
                    Em breve você poderá acompanhar nossos cultos,
                    eventos, ministérios e projetos missionários. 
                  </p>             
                </div>
            </main>
        </>
    );
}
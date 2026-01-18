import CoffeeQuiz from "./Quiz";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-center font-sans text-sm lg:flex flex-col">
                <header className="mb-12 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                        Basecamp Coffee
                    </h1>
                    <p className="text-xl md:text-2xl font-medium opacity-90">
                        Personality Quiz
                    </p>
                </header>
                
                <CoffeeQuiz />

                <footer className="mt-12 text-white/70 text-sm">
                    © 2026 Basecamp Coffee Loyalty Program
                </footer>
            </div>
        </main>
    );
}

import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import Image from "next/image";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col items-center justify-center min-h-screen text-center p-4">
                <div className="flex flex-col md:flex-row items-center justify-center animate-fade-in">
                    <div className="mb-6 md:mb-0 md:mr-8">
                        <h1 className="text-5xl font-bold mb-4 transition-transform transform hover:scale-105">
                            I&apos;M <span className="text-black font-serif">Sagar Kumar</span>
                        </h1>
                        <p className="text-lg mb-6 animate-slide-in">
                            I am a passionate developer specializing in web development and design.
                        </p>
                    </div>
                    <div>
                        <Image
                            src="https://via.placeholder.com/400"
                            width={500}
                            height={500}
                            alt="Sagar Kumar"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;

import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import Link from "next/link";

const Home = () => {
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="flex flex-col items-center justify-center min-h-screen text-center p-4">
                <div className="animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4 transition-transform transform hover:scale-105">
                        Welcome to My Portfolio
                    </h1>
                    <p className="text-lg mb-6 animate-slide-in">
                        I am a passionate developer specializing in web development and design.
                    </p>
                    <Link
                        href="/projects"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105"
                    >
                        View My Projects
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;

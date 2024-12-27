import Layout from "@/Components/Layout/Layout";
import Head from "next/head";

const Home = () => {
    return (
        <Layout>
            <div className="bg-gray-900 text-white overflow-hidden">
                <Head>
                    <title>Freelance Developer</title>
                    <meta name="description" content="Welcome to my portfolio!" />
                </Head>

                <header className="h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600">
                    <div className="text-center animate-fade-in">
                        <h1 className="text-6xl font-bold">I&lsquo;m a Freelance Developer</h1>
                        <p className="mt-4 text-lg">Specializing in MERN and MEAN stacks</p>
                        <a href="#about" className="mt-6 inline-block bg-white text-gray-900 py-2 px-4 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
                            Learn More
                        </a>
                    </div>
                </header>
                <section id="about" className="py-20 bg-gray-800">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-6">About Me</h2>
                        <p className="text-lg mb-4">
                            I&apos;m a passionate developer with over 4.6 years of experience in creating efficient web applications.
                        </p>
                        <p className="text-lg">
                            I love observing the world and learning new things, integrating them into my projects to innovate and improve.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-gray-900">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-6">Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-700 p-6 rounded-lg hover:shadow-lg transform transition duration-300 hover:-translate-y-2">
                                <h3 className="text-xl font-semibold">Web Development</h3>
                                <p className="mt-2">Building responsive and dynamic web applications.</p>
                            </div>
                            <div className="bg-gray-700 p-6 rounded-lg hover:shadow-lg transform transition duration-300 hover:-translate-y-2">
                                <h3 className="text-xl font-semibold">UI/UX Design</h3>
                                <p className="mt-2">Creating user-friendly interfaces and experiences.</p>
                            </div>
                            <div className="bg-gray-700 p-6 rounded-lg hover:shadow-lg transform transition duration-300 hover:-translate-y-2">
                                <h3 className="text-xl font-semibold">Consultation</h3>
                                <p className="mt-2">Advising on tech solutions tailored to your needs.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;

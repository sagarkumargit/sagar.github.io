import ExperienceSection from "@/Components/Experience/experience";
import { useTheme } from "../../Context/themeContext"; // Import theme context
import Layout from "@/Components/Layout/Layout";
import Head from "next/head";
import ServicesSection from "@/Components/Services/services";
import HeroSection from "@/Components/HeroSection";

const Home = () => {
    const { theme } = useTheme(); // Get current theme

    return (
        <Layout>
            <div
                className={`overflow-hidden pt-10 ${theme === "light" ? "bg-black text-yellow-400" : "bg-black text-yellow-300"}`}
            >
                <Head>
                    <title>Freelance Developer</title>
                    <meta name="description" content="Welcome to my portfolio!" />
                </Head>
                {/* Hero Section */}
                <HeroSection/>
                {/* Experience Section */}
                <ExperienceSection/>
                {/* Services Section */}
                <ServicesSection/>
            </div>
        </Layout>
    );
};

export default Home;

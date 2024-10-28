import About from "@/Components/About";
import Layout from "@/Components/Layout/Layout";

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col min-h-screen">
                <About />
            </div>
        </Layout>
    );
};

export default Home;

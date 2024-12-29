import ContactForm from "@/Components/ContactForm";
import Layout from "@/Components/Layout/Layout";
import Head from "next/head";

const Contact = () => {
    return (
        <Layout>
            <Head>
                <title>Contact Me | Sagar Kumar</title>
            </Head>

            <section className="py-12 min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-200 text-black">
                <div className="container mx-auto flex justify-center items-center pt-24">
                    <ContactForm />
                </div>
            </section>
        </Layout>
    );
};

export default Contact;

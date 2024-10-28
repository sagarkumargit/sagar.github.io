import ContactForm from "@/Components/ContactForm";
import Layout from "@/Components/Layout/Layout";

const Contact = () => {
    return (
        <Layout>
            <div className="bg-gray-100">
                <main className="flex flex-col items-center justify-center min-h-screen p-4">
                    <h1 className="text-4xl font-bold mb-6 animate-fade-in">Contact Me</h1>
                    <ContactForm />
                </main>
            </div>
        </Layout>
    );
};

export default Contact;

import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";

const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="bg-gray-100">
            <Header />
            <main className="flex flex-col items-center justify-center min-h-screen p-4">
                <h1 className="text-4xl font-bold mb-6 animate-fade-in">Contact Me</h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-lg p-8 max-w-md w-full space-y-4 animate-fade-in"
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        required
                        className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;

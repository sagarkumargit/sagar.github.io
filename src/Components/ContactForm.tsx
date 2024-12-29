import { useState, ChangeEvent, FormEvent } from "react";
import { useTheme } from "../Context/themeContext"; // Assuming themeContext is set up for your app

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { theme } = useTheme(); // Fetch theme from context

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Error sending message. Please try again.");
      }
    } catch (error) {
      setStatus(`Error sending message. Please try again.${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-6 w-3/5 mx-auto p-8 rounded-lg shadow-xl transition-all duration-300 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-yellow-400"
      }`}
    >
      <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
      <div>
        <label
          htmlFor="name"
          className={`block text-lg font-medium ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 ${
            theme === "light" ? "bg-white" : "bg-gray-700"
          }`}
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className={`block text-lg font-medium ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 ${
            theme === "light" ? "bg-white" : "bg-gray-700"
          }`}
          required
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className={`block text-lg font-medium ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 ${
            theme === "light" ? "bg-white" : "bg-gray-700"
          }`}
          required
        ></textarea>
      </div>

      {/* Status */}
      {status && (
        <div
          className={`text-center text-lg mt-4 ${
            status.includes("sent") ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </div>
      )}

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className={`w-full py-3 mt-4 rounded-md transition-all duration-200 ${
            isSubmitting ? "bg-gray-300 text-gray-500" : "bg-yellow-500 text-white"
          } hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

const ContactForm = () => {
    return (
      <form className="mt-8 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="border p-2 w-full mb-4" />
        <input type="email" placeholder="Your Email" className="border p-2 w-full mb-4" />
        <textarea placeholder="Your Message" className="border p-2 w-full mb-4" rows={4} />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Send Message</button>
      </form>
    );
  };
  
  export default ContactForm;
  
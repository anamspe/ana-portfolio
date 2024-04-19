import ContactForm from "./Contactform";

const Contact = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto p-10" id="contact">
      <h2 className="text-4xl mt-12 font-arima font-bold text-cherry">
        Contact
      </h2>
      <span className="mx-6 font-wellfleet">▪ Get in touch</span>
      <ContactForm />
    </div>
  );
};

export default Contact;

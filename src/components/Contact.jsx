import ContactForm from "./Contactform";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto p-10 section-min-height" id="contact">
      <h2 className="text-4xl mt-12 font-arima font-bold text-cherry">
        Contact
      </h2>
      <span className="mx-6 font-wellfleet">▪ Get in touch</span>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col text-lg">
          <p>Email</p>
          <a href="mailto:anamspe.fr@gmail.com" className="font-bold text-cherry-400 hover:text-cherry-300 active:text-cherry-200">anamspe.fr@gmail.com</a>
          <p className="mt-4">LinkedIn</p>
          <a href="https://www.linkedin.com/in/anamspe/" className="font-bold text-cherry-400 hover:text-cherry-300 active:text-cherry-200">@anamspe</a>
          <p className="mt-4">Github</p>
          <a href="https://github.com/anamspe" className="font-bold text-cherry-400 hover:text-cherry-300 active:text-cherry-200">@anamspe</a>
        </div>
        <div className="sm:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

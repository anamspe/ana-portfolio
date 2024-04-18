const Contact = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto p-10" id="contact">
      <h2 className="text-4xl mt-12 font-arima font-bold text-cherry">
        Contact
      </h2>
      <span className="mx-6 font-wellfleet">▪ Get in touch</span>
      <form>
        <div className="mt-10 flex flex-col gap-4 max-w-96">
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 "
            >
              Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-tyrian-600 sm:max-w-md">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Your Name"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 "
            >
              Email
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-tyrian-600 sm:max-w-md">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Your Email"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 "
            >
              Message
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-tyrian-600 sm:max-w-md">
                <textarea
                  name="message"
                  rows={8}
                  id="message"
                  autoComplete="off"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 resize-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex place-content-end">
            <button
              type="submit"
              className="bg-tyrian hover:bg-tyrian-600 active:bg-tyrian-800 py-2 px-4 rounded-xl hover:ease-in-out transition-all duration-500"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;

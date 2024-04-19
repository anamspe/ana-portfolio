import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  // Function called on submit: uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destructure data object
    const { name, email, subject, message } = data;

    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = { name, email, subject, message };

      // Use emailjs to email contact form data
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      // Display success alert
      toggleAlert(
        "Form submission was succesfull",
        "bg-green-100 border border-green-400 text-green-700"
      );
    } catch (error) {
      console.error(error);
      // Display error alert
      toggleAlert(
        "Uh oh. Something went wrong. Please try again later.",
        "bg-red-100 border border-red-400 text-red-700"
      );
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fiels after submission
      reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                  disabled={disabled}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    maxLength: {
                      value: 45,
                      message: "Please use 45 characters or less",
                    },
                  })}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Your Name"
                />
              </div>
              {errors.name && (
                <span className="errorMessage text-tyrian-700">
                  {errors.name.message}
                </span>
              )}
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
                  disabled={disabled}
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Your Email"
                />
              </div>
              {errors.email && (
                <span className="errorMessage text-tyrian-700">
                  Please enter a valid email address
                </span>
              )}
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium leading-6 "
            >
              Subject
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-tyrian-600 sm:max-w-md">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="off"
                  disabled={disabled}
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Please enter a subject",
                    },
                    maxLength: {
                      value: 75,
                      message: "Subject cannot exceed 75 characters",
                    },
                  })}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Subject"
                />
              </div>
              {errors.subject && (
                <span className="errorMessage text-tyrian-700">
                  {errors.subject.message}
                </span>
              )}
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
                  disabled={disabled}
                  {...register("message", {
                    required: true,
                  })}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 resize-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Your Message"
                ></textarea>
              </div>
              {errors.message && (
                <span className="errorMessage text-tyrian-700">
                  Please enter a message
                </span>
              )}
            </div>
          </div>

          <div className="flex place-content-end">
            <button
              type="submit"
              disabled={disabled}
              className="bg-tyrian hover:bg-tyrian-600 active:bg-tyrian-800 py-2 px-4 rounded-xl hover:ease-in-out transition-all duration-500"
            >
              Send
            </button>
          </div>
        </div>
      </form>
      {alertInfo.display && (
        <div
          className={`${alertInfo.type} px-4 py-3 my-3 max-w-96 rounded relative`}
          role="alert"
        >
          {alertInfo.message}
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() =>
              setAlertInfo({ display: false, message: "", type: "" })
            }
          >
            <svg
              className="fill-current h-6 w-6 text-zinc-600"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
    </>
  );
};

export default ContactForm;

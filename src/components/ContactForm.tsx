import { useRef, useState } from "react";
import axios from "axios";

type ContactFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const initFormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const fNameRef = useRef<HTMLInputElement>();
  const lNameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const messageRef = useRef<HTMLTextAreaElement>();

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const clearFields = () => {
    // @ts-ignore
    fNameRef.current.value = "";
    // @ts-ignore
    lNameRef.current.value = "";
    // @ts-ignore
    emailRef.current.value = "";
    // @ts-ignore
    messageRef.current.value = "";
  };

  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData: ContactFormFields = initFormData;

    if (fNameRef?.current) {
      formData.firstName = fNameRef.current.value;
    }

    if (lNameRef?.current) {
      formData.lastName = lNameRef.current.value;
    }

    if (emailRef?.current) {
      formData.email = emailRef.current.value;
    }

    if (messageRef?.current) {
      formData.message = messageRef.current.value;
    }

    await axios.post(
      "https://trinity-cms.onrender.com/api/contact-form-submissions",
      {
        data: formData,
      }
    );

    // @TODO: sendgrid email notification once Ken has verified on his end.
    // await axios.post()

    setFormSubmitted(true);
    clearFields();
  };

  return (
    <form
      id="contact-form"
      className="w-full px-12 pt-6 mt-8 lg:mt-10"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center pt-4">
        <div className="pb-12 contact-intro">
          <h2 className="font-semibold leading-7 text-darkBlue text-3xl">
            Send us a message
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Complete the form and we will get back to you.
          </p>

          <div className="flex flex-col md:flex-row w-full">
            <div className="mt-10 gap-x-6 gap-y-8 w-full md:w-1/2 mb-8">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    // @ts-ignore
                    ref={fNameRef}
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="last-name"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    // @ts-ignore
                    ref={lNameRef}
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    // @ts-ignore
                    ref={emailRef}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    // @ts-ignore
                    ref={messageRef}
                    id="message"
                    name="message"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-wrap flex-col items-center justify-center p-4 md:p-6">
                <div
                  className={`mb-8 ${formSubmitted ? "" : "hidden"} thank-you`}
                >
                  ✅ Thank you! We will be in touch shortly &mdash; allow at
                  least 48 hours for a reply.
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-teal px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:my-6"
                >
                  Send Message
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center w-full md:w-1/2">
              <img
                className="hidden md:block w-[133px] h-[180px]"
                src="https://res.cloudinary.com/diattpuqa/image/upload/v1695395088/tlm_emblem_2x_8c8bcad4f4.png"
                alt="Trinity Life Ministry"
              />

              <div className="address-info text-center pt-12">
                <h3>Mailing Address</h3>

                <div className="flex flex-col items-center mb-8">
                  <span>2150 Elmwood Ave</span>
                  <span>Lafayette, IN 47904</span>
                </div>

                <div className="flex flex-col items-center contact-links">
                  <div>Corporate Office | <a href="tel:17657421060">765-742-1060</a></div>
                  <div>Fax | <a href="tel:17657421061">765-742-1061</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

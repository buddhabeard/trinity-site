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
      className="w-full shadow px-4 mt-8 lg:mt-10"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center pt-4">
        <div className="pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Contact Us
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Complete the form and we will get back to you.
          </p>

          <div className="flex flex-col md:flex-row w-full">
            <div className="mt-10 gap-x-6 gap-y-8 w-full md:w-1/2 mb-8">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
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

              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
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

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
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

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900"
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

              <div className="mb-8 lg:my-6 flex items-center justify-start gap-x-6">
                <button
                  type="submit"
                  className="rounded-md bg-teal px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send Message
                </button>
                <div className={`${formSubmitted ? "" : "hidden"} thank-you`}>
                  ✅ Thank you! We will be in touch shortly &mdash; allow at
                  least 48 hours for a reply.
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center w-full md:w-1/2">
              <img
                className="hidden md:block w-[133px] h-[180px]"
                src="https://res.cloudinary.com/diattpuqa/image/upload/v1695395088/tlm_emblem_2x_8c8bcad4f4.png"
                alt=""
              />

              <div className="address-info text-center">
                <h3>Mailing Address</h3>

                <div className="flex flex-col items-center mb-8">
                  <span>2150 Elmwood Ave</span>
                  <span>Lafayette, IN 47904</span>
                </div>

                <div className="flex flex-col items-center">
                  <span>Corporate Office | 765-742-1060</span>
                  <span>Fax | 765-742-1061</span>
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

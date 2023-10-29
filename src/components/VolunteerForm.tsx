import axios from "axios";
import { useRef, useState } from "react";

type VolunteerFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  timeAvailable: string;
};

type TimeAvailableSelect = {
  day: boolean;
  evenings: boolean;
  weekendsOnly: boolean;
};

const timeAvailableValues = {
  day: "During the day",
  evenings: "Evenings",
  weekendsOnly: "Weekends Only",
};

const initFormData = {
  firstName: "",
  lastName: "",
  email: "",
  timeAvailable: timeAvailableValues.day,
};

const VolunteerForm = () => {
  const fNameRef = useRef<HTMLInputElement>();
  const lNameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();

  const [timeAvailable, setTimeAvailable] = useState<TimeAvailableSelect>({
    day: false,
    evenings: false,
    weekendsOnly: false,
  });
  const [formattedTime, setFormattedTime] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const clearFields = () => {
    // @ts-ignore
    fNameRef.current.value = "";
    // @ts-ignore
    lNameRef.current.value = "";
    // @ts-ignore
    emailRef.current.value = "";
  };

  const handleTimeAvailable = (e: { target: { name: string } }) => {
    setTimeAvailable({
      ...timeAvailable,
      [e.target.name]:
        !timeAvailable[e.target.name as "day" | "evenings" | "weekendsOnly"],
    });
  };

  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData: VolunteerFormFields = initFormData;

    if (fNameRef?.current) {
      formData.firstName = fNameRef.current.value;
    }

    if (lNameRef?.current) {
      formData.lastName = lNameRef.current.value;
    }

    if (emailRef?.current) {
      formData.email = emailRef.current.value;
    }

    formData.timeAvailable = Object.entries(timeAvailable)
      .map(([k, v]) => {
        if (k === "day" && v) return "During the day";
        if (k === "evenings" && v) return "|Evenings";
        if (k === "weekendsOnly" && v) return "|Weekends Only";
      })
      .join("");

    await axios.post(
      "https://trinity-cms.onrender.com/api/volunteer-form-submissions",
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
      id="volunteer-form"
      className="w-full md:w-11/12 lg:ml-auto pt-12"
    >
      <div className="space-y-12">
        <div className="pb-2">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Volunteer Your Time
          </h2>
          <p className="mt-6 text-base leading-6 text-gray-600">
            If you are interested in helping out with our events and other needs amongst the community please provide the information below and we'll get back to you.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
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
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
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
                  required
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
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
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-6">
          <div className="flex flex-wrap mt-10">
            <fieldset className="w-full sm:w-1/2">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Times You&apos;re Available:
              </legend>
              <div className="mt-6 flex flex-col">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="day"
                      name="day"
                      type="checkbox"
                      checked={timeAvailable.day && !formSubmitted}
                      onChange={handleTimeAvailable}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="day" className="font-medium text-gray-900">
                      During the day
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="evenings"
                      name="evenings"
                      type="checkbox"
                      checked={timeAvailable.evenings && !formSubmitted}
                      onChange={handleTimeAvailable}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="evenings"
                      className="font-medium text-gray-900"
                    >
                      Evenings
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="weekendsOnly"
                      name="weekendsOnly"
                      type="checkbox"
                      checked={timeAvailable.weekendsOnly && !formSubmitted}
                      onChange={handleTimeAvailable}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="weekendsOnly"
                      className="font-medium text-gray-900"
                    >
                      Weekends only
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className={`${formSubmitted ? "mt-8" : "hidden"} thank-you`}>
        ✅ Thank you! We will be in touch shortly &mdash; allow at least 48
        hours for a reply.
      </div>
      <div className="mt-6 flex items-center justify-start gap-x-6">
        <button
          onClick={handleSubmit}
          type="submit"
          className="rounded-md bg-teal px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send Volunteer Request
        </button>
      </div>
    </form>
  );
};

export default VolunteerForm;

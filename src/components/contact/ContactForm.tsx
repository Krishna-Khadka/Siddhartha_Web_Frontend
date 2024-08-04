import React from "react";

const ContactForm = () => {
  return (
    <>
      <div>
        <form className="w-full">
          {/* fist row form  */}
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase text-[#525271] text-base tracking-wider font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
                <span className="text-red-600"> * </span>
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase text-[#525271] text-base tracking-wider font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
                <span className="text-red-600"> * </span>
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* second row form  */}
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <label
                className="block uppercase text-[#525271] text-base tracking-wider font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
                <span className="text-red-600"> * </span>
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="grid-email"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                className="block uppercase text-[#525271] text-base tracking-wider font-bold mb-2"
                htmlFor="grid-phone"
              >
                Phone No.
                <span className="text-red-600"> * </span>
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="grid-phone"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* third row div */}
          <div className="w-full">
            <label
              className="block uppercase text-[#525271] text-base tracking-wider font-bold mb-2"
              htmlFor="grid-message"
            >
              Your Message Here
            </label>
            <textarea
              className="appearance-none block w-full h-[150px] text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              id="grid-message"
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

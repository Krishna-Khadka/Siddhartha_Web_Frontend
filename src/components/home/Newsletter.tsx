import "./Newsletter.css";

import Image from "next/image";
import mail from "../../../public/send-mail.png";

export default function Newsletter() {
  return (
    <div className="bg-[#125875] py-16">
      <div className="w-[95%] sm:w-[95%] mx-auto md:container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
          {/* first div grid */}
          <div className="flex flex-wrap text-center items-center gap-8">
            <div className="mx-auto sm:mx-auto md:mx-0">
              <Image
                src={mail}
                alt="Mail Image"
                className="h-auto max-w-full border-none shadow-none rounded-none"
              />
            </div>
            <div>
              <h2 className="text-[40px] text-white font-semibold tracking-wide">
                Subscribe for Newsletter
              </h2>
              <p className="text-white text-[15px] tracking-wide font-normal">
                Subscribe to get notified for our latest news and events
              </p>
            </div>
          </div>

          {/* second div grid */}
          <div className="newsletter relative">
            <input
              type="text"
              className="form-control pl-0 sm:pl-0 md:pl-5"
              placeholder="Email Address........"
              required
            />
            <button
              type="submit"
              className="btn-newsletter px-[8px] sm:px-[8px] md:px-8"
            >
              subscribe now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

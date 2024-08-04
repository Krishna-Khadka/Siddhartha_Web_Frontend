import ComingSoon from "@/components/ComingSoon";
import ContactDetail from "@/components/contact/ContactDetail";
import ContactForm from "@/components/contact/ContactForm";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container mx-auto py-20">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/5">
            <ContactDetail />
          </div>
          <div className="w-full md:w-3/5">
            <div>
              <h2 className="font-extrabold text-[42px] text-secColor capitalize">
                Keep In Touch, we want to hear from you <br /> send us message
              </h2>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

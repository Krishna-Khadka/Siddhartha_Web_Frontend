import Link from "next/link";
import React from "react";

const ContactDetail = () => {
  return (
    <>
      <div className="bg-[#E8E9ED] px-10">
        <h2 className="text-[#ff3115] py-10 capitalize text-3xl font-bold tracking-wider">
          contact information
        </h2>

        {/* contact-info list  */}
        <ul>
          <li>
            <p className="text-lg font-bold text-secColor tracking-wider capitalize">
              Phone No:
            </p>
            <Link href="#">
              <span className="text-[#525271] text-lg tracking-wider">
                +977 9852310235
              </span>
            </Link>
          </li>

          <li className="pt-5">
            <p className="text-lg font-bold text-secColor tracking-wider capitalize">
              Email:
            </p>
            <Link href="#">
              <span className="text-[#525271] text-lg tracking-wider">
                siddharthaedu@gmail.com
              </span>
            </Link>
          </li>

          <li className="pt-5">
            <p className="text-lg font-bold text-secColor tracking-wider capitalize">
              Location:
            </p>
            <Link href="#">
              <span className="text-[#525271] text-lg tracking-wider">
                Sundarharaincha-12 <br /> Khorsane, Morang
              </span>
            </Link>
          </li>

          <li className="pt-5">
            <p className="text-lg font-bold text-secColor tracking-wider capitalize">
              Open Hours:
            </p>
            <div>
              <span className="text-[#525271] text-lg tracking-wider block">
                Sunday - Thursday: 9:00 am - 4:00 pm{" "}
              </span>
              <span className="text-[#525271] text-lg tracking-wider">
                Friday: 9:00 am - 2:00 pm
              </span>
            </div>
          </li>

          <li className="pt-5">
            <p className="text-lg font-bold text-secColor tracking-wider capitalize">
              Social Media:
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactDetail;

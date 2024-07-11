import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneVolume,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const TopNav = () => {
  return (
    <div className="h-28 md:h-10 bg-black">
      <div className="md:container mx-auto flex flex-col md:flex-row items-center justify-between h-28 md:h-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="icon-bg">
              <FaEnvelope size={14} className="cursor-pointer" />
            </span>
            <Link href="#">
              <h3 className="text-xs md:text-sm font-medium tracking-wider text-white">
                siddhartha@gmail.com
              </h3>
            </Link>
          </div>
          <div className="flex items-center py-4">
            <span className="icon-bg">
              <FaPhoneVolume size={14} className="cursor-pointer" />
            </span>
            <Link href="/">
              <h3 className="text-xs md:text-sm font-medium tracking-wider text-white">
                9762548964
              </h3>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 h-28 md:h-10">
          <span className="top-icon-bg">
            <Link href="/">
              <FaFacebook size={14} className="cursor-pointer" />
            </Link>
          </span>
          <span className="top-icon-bg">
            <Link href="/">
              <FaInstagram size={14} className="cursor-pointer" />
            </Link>
          </span>
          <span className="top-icon-bg">
            <Link href="/">
              <FaTwitter size={14} className="cursor-pointer" />
            </Link>
          </span>
          <span className="top-icon-bg">
            <Link href="/">
              <FaLinkedin size={14} className="cursor-pointer" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

import feature from "../../../public/feature.png";

import { FaUsers, FaChalkboardUser } from "react-icons/fa6";
import { MdOutlineSportsSoccer } from "react-icons/md";

export function Features() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          {/* first grid div */}
          <div className="bg-[#125875] py-20">
            <div className="w-[88%] ml-auto">
              <div>
                <h2 className="text-4xl text-white tracking-wide font-extrabold">
                  Our Best Features
                </h2>
              </div>
              <div>
                <p className="text-md font-medium leading-7 pt-4 text-gray-200">
                  At Siddhartha, our teachers are more than just educators; they
                  are mentors, guides, and role models. With years of experience
                  and a passion for teaching, our faculty members are dedicated
                  to providing personalized attention and support to each
                  student
                </p>
              </div>

              {/* feature list div */}
              <div className="pt-8">
                <ul>
                  <li className="flex gap-4">
                    {/* icon div */}
                    <div
                      className="w-1/3 feature-icon flex items-center justify-center text-white rounded-[50%]"
                      style={{
                        height: "70px",
                        width: "70px",
                        backgroundColor: "#FF3115",
                        fontSize: "38px",
                      }}
                    >
                      <FaUsers />
                    </div>

                    {/* feature info div */}
                    <div className="w-2/3">
                      <h3 className="text-[22px] sm:text-[22px] md:text-3xl text-white tracking-wide font-bold">
                        Experienced Teachers
                      </h3>
                      <p className="text-sm sm:text-sm md:text-md pt-0 sm:pt-0 md:pt-3 tracking-wide font-medium leading-7 text-gray-200">
                        Our teachers are experienced mentors, passionate about
                        personalized support and engaging lessons, bringing
                        real-world knowledge to every classroom.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4 pt-8">
                    {/* icon div */}
                    <div
                      className="w-1/3 feature-icon flex items-center justify-center text-white rounded-[50%]"
                      style={{
                        height: "70px",
                        width: "70px",
                        backgroundColor: "#FF3115",
                        fontSize: "38px",
                      }}
                    >
                      <FaChalkboardUser />
                    </div>

                    {/* feature info div */}
                    <div className="w-2/3">
                      <h3 className="text-[22px] sm:text-[22px] md:text-3xl text-white tracking-wide font-bold">
                        Interactive Learning
                      </h3>
                      <p className="text-sm sm:text-sm md:text-md pt-0 sm:pt-0 md:pt-3 tracking-wide font-medium leading-7 text-gray-200">
                        We use smart boards to enhance learning with interactive
                        lessons and multimedia resources, catering to diverse
                        learning styles and keeping students motivated.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4 pt-8">
                    {/* icon div */}
                    <div
                      className="w-1/3 feature-icon flex items-center justify-center text-white rounded-[50%]"
                      style={{
                        height: "70px",
                        width: "70px",
                        backgroundColor: "#FF3115",
                        fontSize: "38px",
                      }}
                    >
                      <MdOutlineSportsSoccer />
                    </div>

                    {/* feature info div */}
                    <div className="w-2/3">
                      <h3 className="text-[22px] sm:text-[22px] md:text-3xl text-white tracking-wide font-bold">
                        ECA & CCA Activities
                      </h3>
                      <p className="text-sm sm:text-sm md:text-md pt-0 sm:pt-0 md:pt-3 tracking-wide font-medium leading-7 text-gray-200">
                        We provide a variety of Extra-Curricular and
                        Co-Curricular Activities, including sports, arts, and
                        community service, helping students explore interests
                        and develop skills for a well-rounded education.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* second grid div */}
          <div
            className="bg-cover bg-no-repeat h-full bg-center"
            style={{ backgroundImage: `url(${feature.src})` }}
          ></div>
        </div>
      </div>
    </>
  );
}

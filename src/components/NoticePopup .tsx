"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import notice1 from "../../public/blog1.jpg";
import notice2 from "../../public/blog2.jpg";

const NoticePopup = () => {
  const notices = [
    { src: notice1, alt: "Notice 1" },
    { src: notice2, alt: "Notice 2" },
  ];

  const [isOpen, setIsOpen] = useState<boolean[]>(
    new Array(notices.length).fill(true)
  );
  const [currentNotice, setCurrentNotice] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen[currentNotice]) {
      timer = setTimeout(() => {
        if (currentNotice < notices.length - 1) {
          setCurrentNotice(currentNotice + 1);
        } else {
          setIsOpen(
            isOpen.map((open, index) =>
              index === currentNotice ? false : open
            )
          );
        }
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [currentNotice, isOpen]);

  const closePopup = (index: number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = false;
    setIsOpen(updatedIsOpen);
  };

  if (!isOpen.some((open) => open)) return null;

  return (
    <>
      {isOpen.map(
        (open, index) =>
          open && (
            <div
              key={index}
              className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50"
            >
              <div className="relative h-[700px] w-[1000px] bg-white rounded-md overflow-hidden">
                <button
                  className="absolute top-2 right-2 text-white bg-gray-800 py-1 px-5 text-3xl hover:bg-[#FF3115] duration-500 transition-all"
                  onClick={() => closePopup(index)}
                >
                  &times;
                </button>
                <Image
                  src={notices[index].src}
                  alt={notices[index].alt}
                  layout="responsive"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          )
      )}
    </>
  );
};

export default NoticePopup;

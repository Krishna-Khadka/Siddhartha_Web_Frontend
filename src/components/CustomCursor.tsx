"use client"; // This makes the component a client component

import { useEffect, ReactNode } from "react";
import gsap from "gsap";

interface CustomCursorProps {
  children: ReactNode;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ children }) => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
      {children}
    </>
  );
};

export default CustomCursor;

import Link from "next/link";
import "./Notice.css";

import { NOTICE_DATA } from "@/components/notice/index.js";

export default function Notice() {
  return (
    <>
      {NOTICE_DATA.map((notice, index) => (
        <div key={index} className="noticeBox">
          <Link href="#">
            <div className="flex gap-6 shadow-lg pb-3 pt-4 px-3 rounded-lg">
              <div className="flex flex-col items-center bg-secColor text-white px-6 py-2 min-h-20 h-full">
                <div>
                  <h2 className="font-bold text-lg">02</h2>
                </div>
                <div>
                  <h5 className="font-bold text-lg capitalize">sep</h5>
                </div>
              </div>
              <div className="pb-8">
                <h2 className="noticeTitle relative text-xl font-bold font-Barlow">
                  {notice.title}
                </h2>
                <p className="text-sm font-semibold font-OpenSans pt-4 leading-6">
                  {notice.description}
                </p>
              </div>
            </div>
        
        </Link>
        </div>
      ))}
    </>
  );
}

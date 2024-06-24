import BlogCard from "./BlogCard";

export default function Blogs() {
  return (
    <>
      <div className="container mx-auto pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="w-full sm:w-full md:w-2/3 ">
            <h4 className="uppercase text-[#535859] text-md font-medium tracking-widest">
              our blogs
            </h4>
            <h2 className="text-4xl text-secColor font-Barlow tracking-wide pt-2 font-extrabold">
              Recent News and Articles
            </h2>
            <p className="text-md font-medium text-[#535859] leading-7 pt-4">
              Since its founding Brivona has been providing its patients with
              the full medical care, encompassing outpatients services, is
              neurology, laboratory, imaging diagnostics and more.
            </p>
          </div>
          <button className="uppercase font-Barlow font-semibold bg-mainColor text-white text-sm py-3 px-6 rounded-[40px] mt-4 md:mt-0 hover:bg-secColor duration-300 transition-all">
            more articles
          </button>
        </div>
        <div>
          <div className="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  );
}

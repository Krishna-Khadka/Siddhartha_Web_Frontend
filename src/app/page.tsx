import Blogs from "@/components/blog/Blogs";
import Event from "@/components/event/Event";
import Hero from "@/components/home/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import SchoolHighlights from "@/components/home/SchoolHighlights";
import Notice from "@/components/notice/Notice";
import Card from "@/global/Card";
import Slider from "./slider/SLider";
import EventCard from "@/global/EventCard";
import Counter from "@/components/counter/Counter";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <Slider />
      <div className="mt-[-50px]">
        <SchoolHighlights />
      </div>
      <HomeAbout />
      {/* <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="capitalize text-4xl font-extrabold text-secColor">
                upcoming events
              </h2>
            </div>
            <div>
              <Event />
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="mt-4 sm:mt-4 md:mt-0">
              <h2 className="capitalize text-4xl font-extrabold text-secColor">
                important dates
              </h2>
            </div>
            <div>
              <Notice />
            </div>
          </div>
        </div>
      </div> */}
      {/* <Blogs /> */}
      <div className="pb-20">
        <EventCard />
      </div>
      <div className="pb-20">
        <Card />
      </div>
      <Counter />
    </div>
  );
}

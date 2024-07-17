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
import Testimonial from "@/components/home/Testimonial";
import Newsletter from "@/components/home/Newsletter";
import { Features } from "@/components/home/Features";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <Slider />
      <div className="mt-[-50px]">
        <SchoolHighlights />
      </div>
      <HomeAbout />
      <div className="pb-20">
        <EventCard />
      </div>
        <Features />
      <div className="py-20">
        <Card />
      </div>
      <Counter />
      <div className="pt-10 pb-10">
        <Testimonial />
      </div>
      <Newsletter />
    </div>
  );
}

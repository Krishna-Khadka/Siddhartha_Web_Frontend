import Image from "next/image";

import review1 from "../../../public/teacher.jpeg";
import review2 from "../../../public/testimonial1.jpg";
import PlusTwoTestimonialLayout from "./PlusTwoTestimonialLayout";

const testimonials = [
  {
    imageSrc: review1,
    name: "Krishna Khadka",
    batch: "SLC Batch 2075/76",
    review:
      "My time at Siddhartha has been transformative. The supportive faculty and rigorous academic programs prepared me well for higher education. Beyond academics, the school's emphasis on extracurricular activities allowed me to explore my interests in debate and science. The sense of community and encouragement from teachers made my school years memorable. I am grateful for the opportunities and guidance I received here.",
  },
  {
    imageSrc: review2,
    name: "Suman Parajuli",
    batch: "SLC Batch 2075/76",
    review:
      "My time at Siddhartha has been transformative. The supportive faculty and rigorous academic programs prepared me well for higher education. Beyond academics, the school's emphasis on extracurricular activities allowed me to explore my interests in debate and science. The sense of community and encouragement from teachers made my school years memorable. I am grateful for the opportunities and guidance I received here.",
  },
];

export default function PlusTwoTestimonials() {
  return (
    <>
      {testimonials.map((testimonial, index) => (
        <PlusTwoTestimonialLayout
          key={index}
          imageSrc={testimonial.imageSrc}
          name={testimonial.name}
          batch={testimonial.batch}
          review={testimonial.review}
        />
      ))}
    </>
  );
}

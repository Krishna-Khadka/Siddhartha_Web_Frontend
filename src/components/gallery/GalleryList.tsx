import gallery1 from "../../../public/blog1.jpg";
import gallery2 from "../../../public/blog2.jpg";
import gallery3 from "../../../public/blog3.jpg";
import GalleryListLayout from "./GalleryListLayout";

const lists = [
  {
    imgSrc: gallery1,
    title: "Grade XI Welcome Programme",
    description:
      "Image Gallery from the Welcome Programme of Grade XI 2081 Batch",
    gallery_id: "1",
  },
  {
    imgSrc: gallery2,
    title: "Saraswati Puja 2080",
    description:
      "Image Gallery from the Welcome Programme of Saraswati Puja 2080",
    gallery_id: "2",
  },
  {
    imgSrc: gallery3,
    title: "Parents Day 2080",
    description:
      "Image Gallery from the Welcome Programme of Parent's Day 2080",
    gallery_id: "3",
  },
];

const GalleryList = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lists.map((list, index) => (
            <GalleryListLayout
              key={index}
              gallery_id={list.gallery_id}
              imgSrc={list.imgSrc}
              title={list.title}
              description={list.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryList;

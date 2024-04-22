import { useState } from "react";
import { BackToHome } from "../utils/helper";

const carouselData = [
  {
    id: 1,
    title: "Image 1",
    imgUrl: `https://images.unsplash.com/photo-1712313275295-105a8ab7bb1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    id: 2,
    title: "Image 2",
    imgUrl: `https://images.unsplash.com/photo-1631261177958-b68a44d92a56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    id: 3,
    title: "Image 3",
    imgUrl: `https://plus.unsplash.com/premium_photo-1669562728886-b2cc51a62e78?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrevImage = () => {
    if (index <= 0) {
      setIndex(carouselData.length - 1);
    } else {
      setIndex((prevIdx: number) => prevIdx - 1);
    }
  };
  const handleNextImage = () => {
    if (index >= carouselData.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIdx: number) => prevIdx + 1);
    }
  };

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Carousel">
        <div className="container">
          <h1 className="main-heading">Image Carousel</h1>
          {carouselData.length ? (
            <div
              className="flex flex-col items-center justify-center"
              key={carouselData[index].id}
            >
              <figure className="h-[400px] w-[50%] overflow-hidden ">
                <img
                  src={carouselData[index].imgUrl}
                  alt={carouselData[index].title}
                />
              </figure>
              <h2 className="mb-6 py-4">{carouselData[index].title}</h2>
            </div>
          ) : null}

          <div className="flex items-center justify-center gap-6">
            <button onClick={handlePrevImage} className="btn-primary">
              Prev
            </button>
            <button onClick={handleNextImage} className="btn-primary">
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;

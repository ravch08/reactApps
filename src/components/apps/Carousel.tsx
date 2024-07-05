import { useState } from "react";
import { carouselData } from "../utils/data";
import { BackToHome } from "../utils/helper";

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

import { useReducer } from "react";

import BackToHome from "../features/BackToHome";
import { galleryImages } from "../utils/data";

type InitailStateProps = {
  curImageIdx: number;
};

type ActionProps = { type: "PREV_IMAGE" } | { type: "NEXT_IMAGE" };

const initialGalleryState: InitailStateProps = {
  curImageIdx: 0,
};

function imageReducer(state: InitailStateProps, action: ActionProps) {
  switch (action.type) {
    case "PREV_IMAGE": {
      const newIdx =
        state.curImageIdx <= 0
          ? galleryImages.length - 1
          : state.curImageIdx - 1;

      return { curImageIdx: newIdx };
    }

    case "NEXT_IMAGE": {
      const newIdx =
        state.curImageIdx >= galleryImages.length - 1
          ? 0
          : state.curImageIdx + 1;

      return { curImageIdx: newIdx };
    }

    default: {
      return state;
    }
  }
}

const CarouselUsingReducer = () => {
  const [state, dispatch] = useReducer(imageReducer, initialGalleryState);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Carousel using Reducer">
        <div className="container mx-auto flex flex-col items-center">
          <div className="mb-12 flex flex-col items-center justify-center">
            <h1 className="main-heading">Carousel using Reducer</h1>

            <figure className="h-[300px] max-w-[50%] overflow-hidden rounded-md">
              <img
                alt="Image"
                className="w-full"
                src={galleryImages[state.curImageIdx]}
              />
            </figure>

            <div className="mt-12 flex items-center gap-3">
              <button
                className="btn-primary"
                onClick={() => dispatch({ type: "PREV_IMAGE" })}
              >
                Prev
              </button>
              <button
                className="btn-primary"
                onClick={() => dispatch({ type: "NEXT_IMAGE" })}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselUsingReducer;

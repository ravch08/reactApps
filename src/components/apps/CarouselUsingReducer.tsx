import { useReducer } from "react";

import BackToHome from "../features/BackToHome";

const galleryImages = [
  "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

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

  console.log(state);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Pagination">
        <div className="container flex flex-col items-center">
          <div className="mb-12 flex flex-col items-center justify-center">
            <h2 className="mb-8 text-2xl font-bold">Image Gallery</h2>

            <figure className="h-80 w-1/2 overflow-hidden">
              <img src={galleryImages[state.curImageIdx]} alt="Image" />
            </figure>

            <div className="mt-12 flex items-center gap-3">
              <button
                className="btn-link"
                onClick={() => dispatch({ type: "PREV_IMAGE" })}
              >
                Prev
              </button>
              <button
                className="btn-link"
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

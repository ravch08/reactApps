import { useState } from "react";

import BackToHome from "../features/BackToHome";

const StarRating = ({ stars }: { stars: number }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleMouseLeave = () => setHover(rating);
  const handleClick = (id: number) => setRating(id);
  const handleMouseEnter = (id: number) => setHover(id);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Star Rating">
        <div className="container">
          <div className="mt-20 flex items-center gap-2">
            <h2 className="mr-12 text-2xl font-semibold">Rating:</h2>
            {[...Array(stars)].map((_, idx) => {
              idx += 1;

              return (
                <svg
                  key={idx}
                  stroke="goldenrod"
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(idx)}
                  xmlns="http://www.w3.org/2000/svg"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  fill={idx <= (hover || rating) ? "goldenrod" : "transparent"}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default StarRating;

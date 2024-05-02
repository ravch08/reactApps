import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

const lazyObserver = (
  ref: RefObject<Element>,
  setShowImage: Dispatch<SetStateAction<boolean>>,
) => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      setShowImage(true);
      observer.disconnect();
    });
  });

  if (ref.current) {
    imageObserver.observe(ref.current);
  }
};

const LazyImage = ({ imgSrc }: { imgSrc: string }) => {
  const [showImage, setShowImage] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    lazyObserver(imageRef, setShowImage);
  }, [imageRef]);

  if (showImage) {
    return <img src={imgSrc} alt="image" className="w-80" />;
  }

  return <span ref={imageRef} className="h-52 min-w-80 bg-slate-300" />;
};

export default LazyImage;

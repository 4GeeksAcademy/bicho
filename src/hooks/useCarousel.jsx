import { useRef } from "react";

export const useCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth; 

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return {
    carouselRef,
    next: () => scroll("right"),
    prev: () => scroll("left"),
  };
};
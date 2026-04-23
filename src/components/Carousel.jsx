import { useCarousel } from "../hooks/useCarousel";

const Carousel = ({
  children,
  className = "",
  showButtons = true,
}) => {
  const { carouselRef, next, prev } = useCarousel();

  return (
    <div className={`relative w-full ${className}`}>
      
      {/* Botón izquierda */}
      {showButtons && (
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black"
        >
          ‹
        </button>
      )}

      {/* Contenedor */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {children}
      </div>

      {/* Botón derecha */}
      {showButtons && (
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black"
        >
          ›
        </button>
      )}
    </div>
  );
};

export default Carousel;
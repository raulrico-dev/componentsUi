import { useRef, useState, useEffect } from "react";

const items = ["Nature", "Architecture", "Technology", "People", "Animals", "Fashion", "Travel", "Food", "Sports", "Art"];

const ScrollMenu = () => {
  const scrollContainerRef = useRef(null);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);

  const checkButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setIsPrevDisabled(scrollLeft === 0);
    setIsNextDisabled(scrollLeft + clientWidth >= scrollWidth);
  };

  useEffect(() => {
    checkButtons(); // Initial check

    scrollContainerRef.current.addEventListener("scroll", checkButtons);
    window.addEventListener("resize", checkButtons);

    return () => {
      scrollContainerRef.current.removeEventListener("scroll", checkButtons);
      window.removeEventListener("resize", checkButtons);
    };
  }, []);

  const scroll = (direction) => {
    const scrollAmount = 150; // Adjust based on your preference
    scrollContainerRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center relative">
      <button
        className={`bg-gray-300 text-gray-700 py-2 px-4 rounded ${isPrevDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
        onClick={() => scroll("prev")}
        disabled={isPrevDisabled}
      >
        Prev
      </button>
      <div
        className="flex overflow-x-auto scroll-smooth mx-2 space-x-4 h-16 scrollbar-hide"
        ref={scrollContainerRef}
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE and Edge
        }}
      >
        {items.map((item, index) => (
          <div
            className="min-w-max bg-gray-100 text-center h-10 py-2 px-4 rounded whitespace-nowrap"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <button
        className={`bg-gray-300 text-gray-700 py-2 px-4 rounded ${isNextDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
        onClick={() => scroll("next")}
        disabled={isNextDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default ScrollMenu;

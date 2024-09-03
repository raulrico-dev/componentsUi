import { useState, useEffect, useRef } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  // Close the drawer when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-semibold relative py-2 px-5 hover:bg-[rgba(var(--foreground-rgb),0.1)]"
      >
        MENU
      </button>
      <div
        className={`fixed inset-0 z-10 bg-black/50 backdrop-blur transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          ref={dialogRef}
          className={`fixed top-0 right-0 h-full w-10/12 max-w-sm bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--background-rgb))] shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <h2 className="p-4 text-xl font-semibold">Menu</h2>
          {/* Add menu items here */}
        </div>
      </div>
    </>
  );
}

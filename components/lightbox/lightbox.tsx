import React, { useState } from "react";
import styles from "./lightbox.module.css";

export default function Lightbox({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLightbox = () => setIsOpen(!isOpen);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={toggleLightbox}
        className={styles.thumbnail} // "cursor-pointer transition-transform hover:scale-105"
      />
      {isOpen && (
        <div
          onClick={toggleLightbox}
          className={styles.overlay} // "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
        >
          <img
            src={src}
            alt={alt}
            className={styles.image} // "max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  );
}

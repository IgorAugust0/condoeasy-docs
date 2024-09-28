import React, { useState } from "react";

const Lightbox = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLightbox = () => setIsOpen(!isOpen);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={toggleLightbox}
        className="lightbox-thumbnail"
        // className="cursor-pointer transition-transform hover:scale-105"
      />
      {isOpen && (
        <div
          className="lightbox-overlay"
          // className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={toggleLightbox}
        >
          <img
            src={src}
            alt={alt}
            className="lightbox-image"
            // className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
      <style jsx>{`
        .lightbox-thumbnail {
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .lightbox-thumbnail:hover {
          transform: scale(1.05);
        }
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        .lightbox-image {
          max-height: 90vh;
          max-width: 90vw;
          object-fit: contain;
        }
      `}</style>
    </>
  );
};

export default Lightbox;

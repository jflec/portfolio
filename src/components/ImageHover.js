import React, { useState, useEffect, useRef } from "react";

import "../style/ImageHover.css";
import "../style/Portfolio.css";

const ImageHover = ({ url, visible, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const imageRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (imageRef.current) {
        setCursorX(event.clientX + 25);
        setCursorY(event.clientY - imageRef.current.offsetHeight - 25);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="image-hover"
    >
      {children}

      {
        <video
          type="video/mp4"
          autoPlay
          muted
          loop
          ref={imageRef}
          style={{
            position: "fixed",
            top: cursorY,
            left: cursorX,
          }}
          src={url}
          alt="Preview"
          className={
            isHovered && visible ? "preview-image" : "preview-image opacity"
          }
        />
      }
    </div>
  );
};

export default ImageHover;

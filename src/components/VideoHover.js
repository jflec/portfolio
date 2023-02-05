import React, { useState, useEffect, useRef, useMemo } from "react";

const VideoHover = ({ url, visible, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const videoRef = useRef(false);

  const handleMouseMove = useMemo(() => {
    return (event) => {
      if (videoRef.current) {
        setCursorX(event.clientX + 25);
        setCursorY(event.clientY - videoRef.current.offsetHeight - 25);
      }
    };
  }, [videoRef]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="video-hover"
    >
      {children}

      {isHovered && visible && (
        <video
          type="video/mp4"
          autoPlay
          muted
          loop
          ref={videoRef}
          style={{
            position: "fixed",
            top: cursorY,
            left: cursorX,
          }}
          src={url}
          alt="Preview"
          className={"preview-video"}
        />
      )}
    </div>
  );
};

export default VideoHover;

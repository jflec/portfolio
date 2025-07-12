// App.jsx
import { useEffect, useState, useRef } from "react";
import Renderer from "./components/Renderer";
import Portfolio from "./components/Portfolio";

import "./style/general.css";

export default function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          const scrollHeight =
            document.documentElement.scrollHeight || document.body.scrollHeight;
          const clientHeight = document.documentElement.clientHeight;
          const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
          setScrollPercentage(Math.min(scrolled, 100));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Portfolio />
      <Renderer scrollPercentage={scrollPercentage} />
    </div>
  );
}

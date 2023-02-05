import { useEffect, useState } from "react";

import Renderer from "./components/Renderer";
import Portfolio from "./components/Portfolio";

import "./style/general.css";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) ||
        document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

      setScrollPercentage(scrolled > 100 ? 100 : scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="app-container">
      <Portfolio />
      <Renderer scrollPercentage={scrollPercentage} />
    </div>
  );
}

export default App;

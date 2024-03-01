import React, { useRef } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import MarqueeEffect from "./components/MarqueeEffect";
import About from "./components/About";
import Projects from "./components/Projects";
import StartProject from "./components/StartProject";
import eyesBg from "./assets/eyesBg.jpg";
import Eyes from "./components/Eyes";
import Footer from "./components/Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      containerRef={containerRef}
    >
      <div
        data-scroll-container
        ref={containerRef}
        className=" w-full bg-zinc-100"
      >
        <Header />
        <LandingPage />
        <MarqueeEffect />
        <About />
        <Eyes url={eyesBg} changes={"h-screen bg-cover bg-center"} />
        <Projects />
        <StartProject />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" w-full bg-zinc-100">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;

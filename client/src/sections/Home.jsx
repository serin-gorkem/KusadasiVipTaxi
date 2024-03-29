import ImageCarousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import NavigationMenu from "../components/NavigationMenu";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [filled, setFilled] = useState(true)

  function toggleNavigationMenu() {
    setOpen(!open);
  }

  setInterval(() => {
      document.querySelector(".progress-fill").classList.remove("animate-progressBar")
  },4000)
  setInterval(() => {
      document.querySelector(".progress-fill").classList.add("animate-progressBar")
  },4010)

  return (
    <>
      <div className="max-container w-full">
        <Navbar toggleNavigationMenu={toggleNavigationMenu} />
      </div>
      <ImageCarousel />
      <NavigationMenu open={open} toggleNavigationMenu={toggleNavigationMenu} />
      <div className="max-container flex h-screen flex-col items-start justify-center gap-2 p-6 text-light-text ">
        <h1 className="z-10 text-4xl sm:text-6xl font-bold">KUSADASI&apos;NA</h1>
        <h2 className="z-10 text-2xl sm:text-4xl font-light ">HOS GELDINIZ</h2>
        <p className="z-10 sm:text-xl ">
          Konforlu aracımızla, ulaşımınızı rahat ve uygun fiyatlarla kolayca
          sağlayabilirsiniz.
        </p>
        <div className="progress-bar w-44 sm:w-56 bg-secondary-color z-50 mt-2 rounded-lg">
          <div className="progress-fill animate-progressBar w-0 h-2 sm:h-3 bg-white rounded-lg transition-all ease-in-out duration-1000"></div>
        </div>
      </div>
    </>
  );
}

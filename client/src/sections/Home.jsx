import ImageCarousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import NavigationMenu from "../components/NavigationMenu";
import { useState } from "react";


export default function Home() {
  const [open, setOpen] = useState(false);

  function toggleNavigationMenu(){
    setOpen(!open);
    
  }

  return (
    <>
      <div className="max-container w-full">
        <Navbar toggleNavigationMenu={toggleNavigationMenu} />
      </div>
      <ImageCarousel />
      <NavigationMenu open={open} toggleNavigationMenu={toggleNavigationMenu} />
    </>
  );
}

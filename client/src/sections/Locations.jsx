import { useRef } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { Rerousel } from "rerousel";

export default function Locations() {
  const itemRefL = useRef(null);
  return (
    <div className="max-container flex flex-col items-center justify-center gap-2  text-dark-text ">
      <h1 className="text-shadow-md text-2xl font-bold sm:text-6xl">
        Konumlarımızı Keşfedin
      </h1>
      <h2 className="text-xl sm:text-3xl ">Efes Antik Kenti Nerede ?</h2>
      <img src="./efes.jpg" className="rounded-md" />
      <div>
        <Rerousel interval={5000} itemRef={itemRefL}>
          {placeImages.map((image) => {
            return (
              <div key={image.id} className="w-[50% - 8px] flex justify-center items-center mx-2">
                <img
                  src={image.url}
                  className="w-full rounded-md object-cover h-32"
                  ref={itemRefL}
                />
              </div>
            );
          })}
        </Rerousel>
      </div>
      <p className=" text-xs">
        Habitasse platea dictumst vestibulum rhoncus est pellentesque elit
        ullamcorper dignissim. Condimentum id venenatis a condimentum viet.{" "}
      </p>
      <div className="flex w-full justify-between">
        <IoMdArrowDropleftCircle />
        <IoMdArrowDroprightCircle />
      </div>
    </div>
  );
}

const placeImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1582380625189-423697e32b92?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1583063158384-33a27265dcf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1664798624786-276827c757ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

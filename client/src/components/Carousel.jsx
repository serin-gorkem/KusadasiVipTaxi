import { useRef } from "react";
import { Rerousel } from "rerousel";

export default function Carousel() {
  const itemRefL = useRef(null);
  const itemRefP = useRef(null);

  return (
    <>
      <div className="pointer-events-none absolute -z-10 max-sm:hidden">
        <Rerousel interval={4000} itemRef={itemRefL}>
          {carouselLandscapeImages.map((c) => {
            return (
              <img
                key={c.id}
                src={c.url}
                className="h-screen w-full object-cover"
                ref={itemRefL}
              />
            );
          })}
        </Rerousel>
      </div>
      <div className="absolute z-0 h-screen w-full bg-[#00000040] "></div>
      <div className="pointer-events-none absolute -z-10 sm:hidden">
        <Rerousel interval={4000} itemRef={itemRefP}>
          {carouselPortraitImages.map((c) => {
            return (
              <img
                key={c.id}
                src={c.url}
                className="h-screen w-full"
                ref={itemRefP}
              />
            );
          })}
        </Rerousel>
      </div>
    </>
  );
}

const carouselPortraitImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1645485858906-56fc0972f31f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1613638377394-281765460baa?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1688675110810-2b5fe5955a4d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1706166150931-64ee23cbae56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const carouselLandscapeImages = [
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1688675110872-94e38720fcf4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1490650404312-a2175773bbf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1560927083-2131878887c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1583062482441-aa1124142248?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

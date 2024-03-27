import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageCarousel() {
  const carouselImages = [
    {
      id: 1,
      mobileURL:
        "https://images.unsplash.com/photo-1613638377394-281765460baa?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desktopURL:
        "https://images.unsplash.com/photo-1490650404312-a2175773bbf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      mobileURL:
        "https://images.unsplash.com/photo-1645485858906-56fc0972f31f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desktopURL:
        "https://images.unsplash.com/photo-1688675110872-94e38720fcf4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      mobileURL:
        "https://images.unsplash.com/photo-1688675110810-2b5fe5955a4d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desktopURL:
        "https://images.unsplash.com/photo-1560927083-2131878887c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      mobileURL:
        "https://images.unsplash.com/photo-1706166150931-64ee23cbae56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desktopURL:
        "https://images.unsplash.com/photo-1583062482441-aa1124142248?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const carouselList = carouselImages.map((element) => {
    return (
      <>
        <div key={element.id} className="md:hidden lg:hidden">
          <img
            className="aspect-auto h-screen"
            src={element.mobileURL}
            alt={element.alt}
          />
        </div>
        <div key={element.id} className="max-sm:hidden">
          <img
            className="h-screen object-cover"
            src={element.desktopURL}
            alt={element.alt}
          />
        </div>
      </>
    );
  });

  return (
    <div className="absolute h-screen w-full">
      <Carousel
        autoPlay={true}
        stopOnHover={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        infiniteLoop={true}
        transitionTime={1000}
        interval={5000}
        centerSlidePercentage={100}
      >
        {carouselList}
      </Carousel>
    </div>
  );
}

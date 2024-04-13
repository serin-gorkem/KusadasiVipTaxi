import Facts from "../components/Facts";

export default function ChooseUs() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1582578598774-a377d4b32223?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "image",
    },
    {
      src: "https://images.unsplash.com/photo-1421091242698-34f6ad7fc088?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "image",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1681497587542-b502f7b67590?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "image",
    },
  ];
  return (
    <>
      <div className="relative ">
        <div className="absolute h-[100%] w-full bg-[url('https://images.unsplash.com/photo-1514041181368-bca62cceffcd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center bg-no-repeat "></div>
        <div className="absolute h-[100%] w-full bg-gradient-to-b from-transparent to-black  "></div>
        <div className="max-container top-0 flex w-full flex-col items-start p-6 text-white ">
          <h1 className="text-xl sm:text-2xl relative">Neden Bizi Tercih Etmelisiniz?</h1>
          <h2 className="text-lg sm:text-5xl font-bold relative ">En iyisini sunuyoruz</h2>
          {images.map((image) => {
            return(
              <Facts
                key={image.src}
                url={image.src}
                alt={image.alt}
              />
            )
          })}
        </div>
      </div>
    </>
  );
}

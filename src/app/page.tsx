import Image from "next/image";
import Home from "@/app/homePage/page";
import About from "@/app/about/page";
import HomeDecription from "./homeDescription/page";
import AboutDescription from "@/app/aboutDescription/page";
import Gallery from "@/app/gallery/page";
import GalleryCollection from "@/app/galleryCollection/page";

export default function page() {
  return (
      <>
      {/*set component*/}

          <Home/>
          <HomeDecription/>
          <About/>
          <AboutDescription/>
          <Gallery/>
          <GalleryCollection/>
      </>
  );
}

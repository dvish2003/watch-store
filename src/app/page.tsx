import Image from "next/image";
import Home from "@/app/homePage/page";
import About from "@/app/about/page";
import HomeDecription from "./homeDescription/page";
import AboutDescription from "@/app/aboutDescription/page";
import Gallery from "@/app/gallery/page";
import GalleryCollection from "@/app/galleryCollection/page";
import Contact from "@/app/contact/page";
import ContactDescription from "@/app/contactDescription/page";
import Footer from "./footer/page";

export default function page() {
  return (
      <>
      {/*set component*/}

          <Home/>
          <About/>
          <Gallery/>
          <Contact/> 
          <Footer/>
          {/* <Footer/> */}
      </>
  );
}

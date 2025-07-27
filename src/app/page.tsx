import Image from "next/image";
import Home from "@/app/homePage/page";
import About from "@/app/about/page";
import HomeDecription from "./homePage/homeDescription/page";
import AboutDescription from "@/app/about/aboutDescription/page";
import Gallery from "@/app/gallery/page";
import GalleryCollection from "@/app/gallery/galleryCollection/page";
import Contact from "@/app/contact/page";
import ContactDescription from "@/app/contact/contactDescription/page";
import Footer from "../component/footer/page";
import LoginPage from "./(login)/login/page";
import RegisterPage from "./(login)/register/page";

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

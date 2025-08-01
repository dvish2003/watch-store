import Home from "@/app/homePage/page";
import About from "@/app/about/page";
import Gallery from "@/app/gallery/page";
import Contact from "@/app/contact/page";
import Footer from "../component/footer/page";


export default function page() {
  return (
      <>
      {/*set component*/}
          <Home/>
          <About/>
          <Gallery/>
          <Contact/> 
          <Footer/>
      </>
  );
}

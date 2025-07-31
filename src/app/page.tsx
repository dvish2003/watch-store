import Home from "@/component/homePage/page";
import About from "@/component/about/page";
import Gallery from "@/component/gallery/page";
import Contact from "@/component/contact/page";
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

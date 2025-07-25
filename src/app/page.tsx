import Image from "next/image";
import Home from "@/app/homePage/page";
import About from "@/app/about/page";

export default function page() {
  return (
      <>
      {/*set component*/}
          <Home/>
          <About/>
      </>
  );
}

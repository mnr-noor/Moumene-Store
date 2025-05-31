import Image from "next/image";
import Hero from "./components/hero";
import Card from "./components/categoryCard";
import NavBar from "./components/navBar";
export default function Home() {
  return (
    <div >
      <NavBar/>
      <Hero/>
    </div>
  );
}

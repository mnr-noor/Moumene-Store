import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="pt-20"> 
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

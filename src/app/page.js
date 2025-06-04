import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="pt-20"> {/* Add top padding to account for fixed navbar */}
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

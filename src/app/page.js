import Image from "next/image";
import Products from "./products/components/products.jsx";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Hero from "./components/hero"

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="pt-20"> 
        <Hero/>
        {/* <Products /> */}
      </main>
      <Footer />
    </div>
  );
}

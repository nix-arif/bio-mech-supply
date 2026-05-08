import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Customers from "@/components/Customers";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <Customers />
      <Team />
    </>
  );
}

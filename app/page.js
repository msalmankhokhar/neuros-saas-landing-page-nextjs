import BrandIcon from "@/components/BrandIcon";
import Navbar from "@/components/Navbar";
import Hero from "@/components/section/Hero";
import Partners from "@/components/section/Partners";
import Strategy from "@/components/section/Strategy";
import Topbar from "@/components/Topbar";
import { Play } from "lucide-react";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Partners />
      <Strategy />
    </>
  );
}

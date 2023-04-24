import NavBar from "@/components/NavBar/NavBar";
import { FaUser, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import About from "@/components/About/About";
import HeroSection from "@/components/HeroSection/HeroSection";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function Home() {
  return (
    <main>
      {/* nav bar */}
      <NavBar />
      {/* hero section */}
      <HeroSection />
      {/* about section title */}
      <SectionTitle title="Who we are" />
      <About />
    </main>
  );
}

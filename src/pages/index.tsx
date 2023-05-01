import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import About from "@/components/About/About";
import HeroSection from "@/components/HeroSection/HeroSection";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Acon Diagnostics | Uganda</title>
        <meta
          name="description"
          content="Acon Diagnostics is aleading supplier of medical products and equipments"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main>
        {/* nav bar */}
        <NavBar />
        {/* hero section */}
        <HeroSection />
        {/* about section title */}
        <SectionTitle title="Who we are" />
        <About />
        <SectionTitle title="Featured Products" />
        <FeaturedProducts />

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-green-500 ">01</div>
          <div className="bg-green-500 ">01</div>
          <div className="bg-green-500 ">01</div>
          <div className="bg-green-500 ">01</div>
          <div className="bg-green-500 ">01</div>
          <div className="bg-green-500 ">01</div>
          <div className="bg-green-500 ">01</div>
          <div className="bg-green-500 ">01</div>
          <div className="bg-green-500 ">01</div>
        </div>

        {/* footer */}
      </main>
    </>
  );
}

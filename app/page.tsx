import Image from "next/image";
import Herosection from "@/components/herosection";
import Navbar from "@/components/navbar";
import Recentpost from "@/components/recent-post";
import FeaturedWorks from "@/components/featured";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Recentpost/>
      <FeaturedWorks/>
      <Footer/>
    </div>
  );
}

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Auth } from "@/components/auth";
import { Logo } from "@/components/logo";
import Footer from "./frontend/footer";
import Page2 from "./frontend/Page2";
import HeroSection from "./frontend/HeroSection";
import Page3 from "./frontend/Page3";
import Page4 from "./frontend/page4";
import Loader from "./frontend/Loader";
import Gooey from "./frontend/Gooey";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }
  
// home page parts from frontend folder
  return (
    <div className="flex bg-[#E1E0E4] flex-col min-h-[100dvh]">
        <Loader />
      <header className="px-4 ml-8 my-2 lg:px-6 h-14 flex items-center justify-between">
        <Logo/>
        <nav className="mr-8 hidden lg:flex gap-4 sm:gap-6">
          <Auth />
        </nav>
      </header>
      <main className="flex-1">
      <HeroSection />
      <Gooey />

      <Page2 />

      <Page3 />

      <Page4 />
      
      </main>
      <Footer/>
      
    </div>
  );
}

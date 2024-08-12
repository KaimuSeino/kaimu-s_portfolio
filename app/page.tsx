import About from "@/components/about";
import Experience from "@/components/experience";
import Products from "@/components/products";
import Skill from "@/components/skill";
import Social from "@/components/social";

export default function Home() {
  return (
    <>
      <main className="mt-16 flex flex-col justify-center items-center">
        <div className="w-[90%] md:w-[80%] pt-10 flex flex-col items-center gap-32 justify-center">
          <About />
          <Skill />
          <Experience />
          <Products />
          <Social />
        </div>
      </main>
    </>
    
  );
}

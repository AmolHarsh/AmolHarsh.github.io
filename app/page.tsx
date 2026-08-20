import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { Publications } from "@/components/Publications";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <Experience />
        <Publications />
        <Research />
        <Education />
        <Footer />
      </main>
    </>
  );
}

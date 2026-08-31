import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { Research } from "@/components/Research";
import { Publications } from "@/components/Publications";
import { Talks } from "@/components/Talks";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <News />
        <Experience />
        <Publications />
        <Talks />
        <Research />
        <Education />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}

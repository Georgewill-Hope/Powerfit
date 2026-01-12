import About from "@/components/About";
import Choose from "@/components/Choose";
import Classes from "@/components/Classes";
import Hero from "@/components/Hero";
import Powerfit from "@/components/Powerfit";

export default function Home() {
  return (
    <div>
      <Hero />
      <Powerfit />
      <About />
      <Classes />
      <Choose />
    </div>
  );
}

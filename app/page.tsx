import About from "@/compoents/About";
import Choose from "@/compoents/Choose";
import Classes from "@/compoents/Classes";
import Hero from "@/compoents/Hero";
import Powerfit from "@/compoents/Powerfit";

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

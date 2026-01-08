import Image from "next/image";
import aboutImage from "@/public/assets/fit-woman-training-indoors.jpg";
import background from "@/public/assets/bg-pattern.avif";
import Button from "./Button";

const About = () => {
  return (
    <section className="relative h-[70vh]">
      <Image
        src={aboutImage}
        alt="woman training"
        fill
        className="object-cover object-center grayscale-25"
      />
      <Image
        src={background}
        alt="woman training"
        fill
        className="object-cover object-center opacity-60"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-linear-60 from-black from-30% via-black/90 to-orange-500/40">
        <div className="container_width h-full flex flex-col justify-center gap-3">
          <h2 className="text-orange-300 font-sora tracking-wider">
            About PowerFit
          </h2>
          <h3 className="text-xl lg:text-2xl font-semibold tracking-wider font-sora">
            Achieve Your Fitness Goals <br className="hidden sm:flex" />
            With Us
          </h3>
          <p className="text-gray-100 text-sm font-sans leading-6">
            At Powerfit, we're dedicated to helping you achieve your fitness
            goals <br className="hidden sm:flex" />
            whether you're a beginner or a seasoned athlete. Our gym features
            top-
            <br className="hidden sm:flex" />
            of-the-line equipment, a variety of engaging classes and experienced
            <br className="hidden sm:flex" />
            personal trainers who are committed to guiding you every step of the
            way.
          </p>
          <div className="mt-5">
            <Button title="Learn More" type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

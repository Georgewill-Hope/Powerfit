import Image from "next/image";
import aboutImage from "@/public/assets/fit-woman-training-indoors.jpg";
import background from "@/public/assets/bg-pattern.avif";
import Button from "./Button";

const About = () => {
  return (
    <section className="relative h-[70vh]">
      {/* Section Background Image */}
      <Image
        src={aboutImage}
        alt="woman training"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 80vw"
        className="object-cover object-center grayscale-25"
      />

      {/* Section Background Image */}
      <Image
        src={background}
        alt="woman training"
        fill
        className="object-cover object-center opacity-60"
      />

      {/*Content Overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-linear-60 from-black from-30% via-black/90 to-orange-500/40">
        <div className="container_width h-full flex flex-col justify-center gap-3">
          {/* Section Header */}
          <h2 className="text-orange-300 font-sora tracking-wider">
            About PowerFit
          </h2>

          {/* Section Sub-header */}
          <h3 className="header">
            Achieve Your Fitness Goals <br className="hidden sm:flex" />
            With Us
          </h3>

          {/* Section Description */}
          <p className="para">
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

          {/* CTA Button */}
          <div className="mt-5">
            <Button title="Learn More" type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

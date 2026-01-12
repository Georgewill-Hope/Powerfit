import Image from "next/image";
import Card from "./Card";
import backgroundImage from "@/public/assets/bg-pattern.avif";
import manTraining from "@/public/assets/man-training.jpg";
import womanTraining from "@/public/assets/woman-exercising.jpg";
import fitIndividual from "@/public/assets/people-doing-sport.jpg";

const Classes = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden
       bg-linear-210 md:bg-linear-60 from-black/80 from-30% via-orange-500/20 md:via-black/90 via-55% to-orange-500/20
        py-16 sm:py-20 lg:py-24
        md:min-h-[80vh]
      "
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="bricks background"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 80vw"
        className="object-cover object-center grayscale opacity-30"
      />

      {/* Content Overlay */}
      <div className="relative w-full z-10 flex items-center justify-center h-full">
        <div
          className="
            container_width
          "
        >
          {/* Section Header */}
          <div className="mb-10 text-center">
            <h3 className="header mb-2">Our Popular Classes</h3>
            <p className="para">
              Join a variety of fitness classes designed to fit your goals and
              schedule
            </p>
          </div>

          {/* Cards Grid */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4 sm:gap-5 lg:gap-6
            "
          >
            <Card
              title="Strength training"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              image={manTraining}
            />
            <Card
              title="Yoga & Pilates"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              image={womanTraining}
            />
            <Card
              title="Cardio Blast"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              image={fitIndividual}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;

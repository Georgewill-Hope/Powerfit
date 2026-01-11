import React from "react";
import CustomGrid from "./CustomGrid";
import manTraining from "@/public/assets/people-using-foam-roller-exercise-practice-fitness.jpg";
import womanTraining from "@/public/assets/portrait-man-working-as-boxer.jpg";
import fitIndividual from "@/public/assets/close-up-athlete-training.jpg";
import pepsiLogo from "@/public/assets/pepsi.png";
import cokeLogo from "@/public/assets/coca-cola.png";
import fantaLogo from "@/public/assets/fanta.png";
import blackWoman from "@/public/assets/black-woman.jpg";
import blackManShouting from "@/public/assets/handsome.jpg"
import logo from "@/public/assets/logo.png"

import Card from "./Card";

const Choose = () => {
  return (
    <section className="w-full py-0 xl:py-20 bg-orange-600 xl:bg-transparent">
      <div className="container_width flex flex-col gap-10 items-center justify-center pt-20 pb-10 bg-orange-600/90 sm:rounded-lg">
        <div className="text-center flex flex-col items-center justify-center gap-2">
          {/* Section Sub-title */}
          <div className="flex items-center justify-center gap-2 rounded-full w-fit bg-black/85 px-3 py-1">
            <div className="size-1.5 rounded-full bg-orange-600" />
            <p className="font-sora text-xs">Why Choose Us?</p>
          </div>

          {/* Section Title */}
          <h4 className="header">
            Why You Should <span className="font-mono">Choose</span> To <br />
            <span className="font-mono">Work</span> With Us
          </h4>
        </div>

        {/* Bento Grid */}
        <CustomGrid>
          {/* Cards */}
          <Card
            title="Trusted by"
            image={womanTraining}
            images={[pepsiLogo, fantaLogo, cokeLogo]}
            type="image, title and sub-image card"
            prefferedStyles="sm:col-span-2 md:row-span-2 md:col-span-1 h-52 sm:h-auto"
          />
          <Card
            title="Our Vision"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit Qui corporis autem sint. quos omnis maiores fugiat ipsum magni, eius harum a dolores."
            type="title & desc card"
            prefferedStyles="h-52 sm:h-auto"
          />
          <Card
            image={manTraining}
            images={[logo]}
            type="image, title and sub-image card"
            prefferedStyles="sm:row-span-2 md:row-span-1 h-52 sm:h-auto"
          />
          <Card
            title="Georgewill Hope"
            desc='"We designed this future to make your journey with us smoother, smarter and more connected to your lifestlye"'
            subDesc="CEO, PowerFit"
            image={womanTraining}
            type="profile card"
            prefferedStyles="h-52 sm:h-auto"
          />
          <Card
            title="98%"
            desc="Client satisfaction rate!"
            images={[
              blackWoman,
              blackManShouting,
              fitIndividual,
              womanTraining,
            ]}
            type="title, desc and rotated sub-image card"
            prefferedStyles="h-52 sm:h-auto"
          />
          <Card
            title="Our Mission"
            type="title & desc card"
            desc="Our mission is to guide individuals towards a balanced, healthier life through the power of mindful exercises and inner awareness."
            prefferedStyles="sm:col-span-2 h-52 sm:h-auto"
          />
        </CustomGrid>
      </div>
    </section>
  );
};

export default Choose;

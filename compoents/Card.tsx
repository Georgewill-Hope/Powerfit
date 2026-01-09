import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import React from "react";

interface CardProps {
  title: string;
  desc: string;
  image:  StaticImageData;
}

const Card: React.FC<CardProps> = ({ title, desc, image }) => {
  return (
    <div>
      <div className="relative h-45 rounded-t-md group overflow-hidden">
        {/* Card Image */}
        <Image
          src={image}
          alt="card image"
          fill
          className="object-cover object-center grayscale-50 rounded-t-md group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/50 rounded-t-md" />
      </div>

      {/* Card Content */}
      <div className="px-3.5 pt-5 pb-3 bg-neutral-950">
        {/* Card Header */}
        <h3 className="text-sm font-semibold tracking-wider font-sora text-gray-100">
          {title}
        </h3>

        {/* Card Description */}
        <p className="text-gray-500 text-xs font-sans leading-6 ">{desc}</p>

        {/* Card Button */}
        <div className="mt-4">
          <Button title="Learn More" type="primary" />
        </div>
      </div>
    </div>
  );
};

export default Card;

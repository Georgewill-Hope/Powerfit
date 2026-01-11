import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import React from "react";

interface CardProps {
  title?: string;
  desc?: string;
  image?: StaticImageData;
  images?: StaticImageData[];
  type?:
    | "title & desc card"
    | "image, title and sub-image card"
    | "profile card"
    | "title, desc and rotated sub-image card";
  prefferedStyles?: string;
  subDesc?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  desc,
  image,
  images,
  type,
  subDesc,
  prefferedStyles,
}) => {
  if (type === "title & desc card") {
    return (
      <div className={`${prefferedStyles} card_body`}>
        <h3 className="card_header">{title}</h3>
        <p className="card_para">{desc}</p>
      </div>
    );
  } else if (type === "image, title and sub-image card") {
    return (
      <div
        className={`${prefferedStyles} relative rounded-lg group overflow-hidden`}
      >
        {image && (
          <Image
            src={image}
            alt="card image"
            fill
            className="object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        )}
        <div
          className={`absolute top-0 left-0 bottom-0 right-0 rounded-lg bg-black/50 px-3.5 py-4 flex flex-col ${
            images?.length === 1
              ? "justify-center items-center"
              : "justify-between"
          } `}
        >
          <div>
            <h3 className="text-sm font-semibold tracking-wider font-sora text-white">
              {title}
            </h3>
            <p className="card_para">{desc}</p>
          </div>
          {images && (
            <div className="flex items-center justify-between">
              {images?.map((item, i) => (
                <Image
                  src={item}
                  alt="sub image"
                  key={i}
                  width={images.length === 1 ? 200 : 70}
                  height={100}
                  className={`${images.length === 1 ? "opacity-15" : "opacity-80"}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } else if (type === "profile card") {
    return (
      <div className={`${prefferedStyles} card_body`}>
        <p className="card_para">{desc}</p>
        <div className="flex items-center gap-2">
          <div className="relative size-10 rounded-full overflow-hidden">
            {image && (
              <Image
                src={image}
                alt="profile image"
                fill
                className="object-center object-cover"
              />
            )}
          </div>
          <div>
            <h3 className="text-sm text-orange-600 tracking-wider font-semibold font-mono">
              {title}
            </h3>
            <p className="card_para">{subDesc}</p>
          </div>
        </div>
      </div>
    );
  } else if (type === "title, desc and rotated sub-image card") {
    return (
      <div className={`${prefferedStyles} card_body`}>
        <div>
          <h3
            className={`text-xl lg:text-2xl font-semibold tracking-wider font-sora text-gray-950`}
          >
            {title}
          </h3>
          <p className="card_para">{desc}</p>
        </div>

        <div className="flex justify-end items-center gap-1 relative">
          {images?.map((item, i) => (
            <div
              className="relative size-7 rounded-full overflow-hidden bg-orange-600"
              style={{
                bottom: i === 1 ? 30 : i === 2 ? 50 : i === 3 ? 55 : 0,
                right: i === 1 ? 5 : i === 2 ? 8 : i === 3 ? 6 : -10,
              }}
              key={i}
            >
              <Image
                src={item}
                alt="card sub image"
                fill
                className="object-center object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${prefferedStyles}`}>
        <div className="relative h-45 rounded-t-md group overflow-hidden">
          {/* Card Image */}
          {image && (
            <Image
              src={image}
              alt="card image"
              fill
              className="object-cover object-center grayscale-50 rounded-t-md group-hover:scale-105 transition-transform duration-300"
            />
          )}
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/50 rounded-t-md" />
        </div>

        {/* Card Content */}
        <div className="px-3.5 pt-5 pb-3 bg-neutral-950">
          {/* Card Header */}
          <h3 className=" text-sm font-semibold tracking-wider font-sora text-gray-100">
            {title}
          </h3>

          {/* Card Description */}
          <p className="text-neutral-500 text-xs font-sans leading-6 w-full max-w-80">
            {desc}
          </p>

          {/* Card Button */}
          <div className="mt-4">
            <Button title="Learn More" type="primary" />
          </div>
        </div>
      </div>
    );
  }
};

export default Card;

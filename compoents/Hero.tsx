import Image from "next/image";
import heroImage from "@/public/assets/muscular-man.jpg";
import Button from "./Button";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import Icon from "./Icon";

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-216px)] relative">
      <Image
        src={heroImage}
        alt="woman training"
        fill
        objectFit="cover"
        objectPosition="center"
        className=""
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center bg-black/50">
        <div className="container_width flex flex-col gap-7 md:gap-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sora">
            Get Fit. <br /> Stay{" "}
            <span className="text-orange-300">Healthy.</span>
          </h1>
          <p className="text-xs tracking-widest font-mono leading-6 sm:leading-8">
            Join Powerfit today and transform your <br className="hidden "/> body and mind with our
            expert trainers <br className="hidden sm:flex"/> and state-of-the-art facilities.
          </p>
          {/* CTA buttons */}
          <div className="flex items-center gap-5">
            <Button title="Get Started" type="primary" />
            <Button title="View Classes" type="secondary" />
          </div>

          {/* Social links */}

          <div className="flex items-center gap-5">
            <Icon type="secondary">
              <BiLogoFacebook size={25} />
            </Icon>
            <Icon type="secondary">
              <BsTwitterX size={25} />
            </Icon>
            <Icon type="secondary">
              <CiInstagram size={25} />
            </Icon>

            <Icon type="secondary">
              <BsYoutube size={25} />
            </Icon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

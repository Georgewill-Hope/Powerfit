import React from "react";
import Icon from "./Icon";
import { CiInstagram } from "react-icons/ci";

interface PowerfitCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const PowerfitCard = ({ title, desc, icon }: PowerfitCardProps) => {
  return (
    <div className="flex gap-3">
      <div>{icon}</div>
      <div>
        <h3 className="font-semibold tracking-wide text-sm mb-1 text-gray-50">{title}</h3>
        <p className="text-xs text-gray-300 tracking-wider font-sora">{desc}</p>
      </div>
    </div>
  );
};

const Powerfit = () => {
  return (
    <section className="bg-black py-10">
      <div className="container_width grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3">
        <PowerfitCard
          title="State-Of-The-Art-Equipment"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          icon={
            <Icon type="primary">
              <CiInstagram size={20} />
            </Icon>
          }
        />
        <PowerfitCard
          title="Expert Trainers"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          icon={
            <Icon type="primary">
              <CiInstagram size={20} />
            </Icon>
          }
        />
        <PowerfitCard
          title="Flexible Membership Plans"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          icon={
            <Icon type="primary">
              <CiInstagram size={20} />
            </Icon>
          }
        />
        <PowerfitCard
          title="Open 7 Days a week"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          icon={
            <Icon type="primary">
              <CiInstagram size={20} />
            </Icon>
          }
        />
      </div>
    </section>
  );
};

export default Powerfit;

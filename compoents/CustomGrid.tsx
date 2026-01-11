import React from "react";

interface CustomGridProps {
  children: React.ReactNode;
  prefferedStyle?: string;
}

const CustomGrid: React.FC<CustomGridProps> = ({
  children,
  prefferedStyle,
}) => {
  return <div className={`${prefferedStyle} w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2 xl:gap-3.5`}>{children}</div>;
};

export default CustomGrid;

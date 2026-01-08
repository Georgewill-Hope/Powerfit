import React from "react";

interface IconProp {
  children: React.ReactNode;
  type: "primary" | "secondary";
}

const Icon = ({ children, type }: IconProp) => {
  if (type === "primary") {
    return (
      <div className="ring-1 ring-orange-300 w-fit p-1 rounded-md text-orange-300">
        {children}
      </div>
    );
  }
  return (
    <div className="ring-1 ring-gray-400 w-fit p-1 rounded-md text-gray-400 hover:ring-gray-100 hover:text-gray-100 transition-colors duration-500 cursor-pointer">
      {children}
    </div>
  );
};

export default Icon;

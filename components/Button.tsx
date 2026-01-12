import React from "react";

interface ButtonProps {
  title: string;
  type: "primary" | "secondary";
}

const Button = ({ title, type }: ButtonProps) => {
  if (type === "primary") {
    return (
      <button
        className={`bg-linear-60 from-orange-600 from-60% to-orange-300 px-6 py-1.5 ring-1 ring-orange-600 tracking-wider rounded-xs text-white font-mono cursor-pointer text-sm `}
      >
        {title}
      </button>
    );
  }

  return (
    <button
      className={`bg-black lg:bg-black/50 px-6 py-1.5 tracking-wider rounded-xs text-gray-200 font-mono ring-1 ring-gray-200 hover:bg-black transition-colors duration-300 cursor-pointer text-sm`}
    >
      {title}
    </button>
  );
};

export default Button;

"use client";

import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { navData } from "@/utils/data";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <nav className="w-full lg:h-20 backdrop-blur-3xl sticky top-0 transition-allsition-all bg-linear-60 from-amber-950/20 via-gray-50/10 to-amber-950/20">
      {/* desktops and laptops navbar */}
      <div className="hidden container_width md:flex items-center justify-between">
        <div>
          {/* navbar logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={50}
              objectFit="contain"
              objectPosition="center"
              className="rounded"
            />
          </Link>
        </div>

        {/* navbar links */}
        <ul className="flex items-center justify-center gap-5">
          {navData.map((item) => (
            <li
              key={item.id}
              className="font-sora text-xs tracking-wider text-white hover:text-orange-300 duration-500"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
          <li className="font-mono text-[10px] tracking-wider">
            georgeblue222@gmail.com
          </li>
        </ul>
      </div>

      {/* mobile phones and tablet navbar */}

      <div className="md:hidden items-center justify-between">
        <div className="flex items-center justify-between h-16 container_width">
          {/* Navbar logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={80}
              height={50}
              objectFit="contain"
              objectPosition="center"
              className="rounded"
            />
          </Link>

          <button onClick={() => setOpenNavbar(!openNavbar)}>
            {!openNavbar ? (
              <AiOutlineMenu size={25} className="text-gray-100" />
            ) : (
              <AiOutlineClose size={25} className="text-gray-100" />
            )}
          </button>
        </div>

        <div
          className={`absolute h-[calc(100vh-64px)] w-full z-10 transition-all duration-500 bg-orange-600 ${
            openNavbar ? "translate-x-0" : "-translate-x-250"
          }`}
        >
          {/* navbar links */}

          <ul className="w-full flex flex-col pt-10 gap-7 container_width">
            {navData.map((item) => (
              <li
                key={item.id}
                className="font-mono text-sm tracking-wider text-white"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
            <li className="font-mono text-[10px] tracking-wider mt-auto mb-5">
              georgeblue222@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

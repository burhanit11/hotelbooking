"use client";

import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-custom-gray px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.PNG"
            alt="Logo"
            width={120}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-white font-medium">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="hover:text-primary transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-gray-600">
              <FaSearch className="text-white" />
            </button>

            <button className="p-2 rounded-full bg-gray-600">
              <CiMenuFries className="text-white" />
            </button>

            <Link href="/booking">
              <button className="flex items-center gap-2 bg-yellow-500 text-black font-semibold px-4 py-2 rounded">
                Book Your Stay <HiMiniArrowUpRight />
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-customGray border-t border-gray-700">
          <ul className="flex flex-col items-center gap-4 py-6 text-white font-medium">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link href={item.path} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Mobile Actions */}
            <div className="flex gap-4 mt-4">
              <span className="p-2 rounded-full bg-gray-600">
                <FaSearch className="text-white" />
              </span>
              <span className="p-2 rounded-full bg-gray-600">
                <CiMenuFries className="text-white" />
              </span>
            </div>

            <Link href="/booking">
              <button className="mt-4 flex items-center gap-2 bg-yellow-500 text-black font-semibold px-6 py-2 rounded">
                Book Your Stay <HiMiniArrowUpRight />
              </button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

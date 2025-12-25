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
  ];

  return (
    <nav className="bg-custom-gray px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.PNG"
              alt="Logo"
              width={120}
              height={60}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu (Center) */}
        <div className="hidden md:flex flex-1 justify-center">
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
        </div>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-4">
          <button className="p-2 rounded-full bg-gray-600">
            <FaSearch className="text-white" />
          </button>

          <button className="p-2 rounded-full bg-gray-600">
            <CiMenuFries className="text-white" />
          </button>

          <Link href="/booking">
            <button className="flex items-center gap-1 bg-yellow-500 text-black font-semibold px-1 py-2 rounded">
              Book Your Stay <HiMiniArrowUpRight />
            </button>
          </Link>
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
        <div className="md:hidden bg-custom-gray border-t border-gray-700">
          <ul className="flex flex-col items-center gap-5 py-6 text-white font-medium">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Mobile Icons */}
            <div className="flex gap-4 mt-4">
              <span className="p-2 rounded-full bg-gray-600">
                <FaSearch className="text-white" />
              </span>
              <span className="p-2 rounded-full bg-gray-600">
                <CiMenuFries className="text-white" />
              </span>
            </div>

            {/* Mobile CTA */}
            <Link href="/booking" onClick={() => setIsOpen(false)}>
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

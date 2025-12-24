import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/images/logo.PNG";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-customGray px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img className="h-9 md:h-10" src={logo} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between gap-8">
          <ul className="flex items-center gap-6 text-white font-medium">
            <li>
              <Link
                className="flex items-center gap-1 hover:text-primary"
                to="/"
              >
                Home <SlArrowDown size={12} />
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/booking">
                Booking
              </Link>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <span className="p-2 rounded-full bg-gray-600 cursor-pointer">
              <FaSearch className="text-white" />
            </span>
            <span className="p-2 rounded-full bg-gray-600 cursor-pointer">
              <CiMenuFries className="text-white" />
            </span>

            <Link to="/booking">
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
            <li>
              <Link onClick={() => setIsOpen(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} to="/booking">
                Booking
              </Link>
            </li>

            {/* Mobile Actions */}
            <div className="flex gap-4 mt-4">
              <span className="p-2 rounded-full bg-gray-600">
                <FaSearch className="text-white" />
              </span>
              <span className="p-2 rounded-full bg-gray-600">
                <CiMenuFries className="text-white" />
              </span>
            </div>

            <Link to="/booking">
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

import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdTopic } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Registration from "../Registration";
import { IoMdContact } from "react-icons/io";
import { RiHomeSmile2Fill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isMembersOpen, setIsMembersOpen] = useState(false); // mobile members dropdown
  const [isDesktopMembersOpen, setIsDesktopMembersOpen] = useState(false); // desktop members dropdown

  const membersRef = useRef(null);

  // 🔹 Close desktop Members dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (membersRef.current && !membersRef.current.contains(event.target)) {
        setIsDesktopMembersOpen(false);
      }
    }
    if (isDesktopMembersOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDesktopMembersOpen]);

  // Nav structure
  const links = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <MdTopic /> },
    { to: "/conference-topics", label: "Conference Topics", icon: <MdTopic /> },
    {
      label: "Members",
      icon: <FaUsers />,
      dropdown: [
        { to: "/patrons", label: "Patrons" },
        { to: "/advisory-committee", label: "Advisory Committee" },
      ],
    },
    {to: "/accommodation", label: "Accommodation", icon: <RiHomeSmile2Fill/>},
    { to: "/registration", label: "Registration", icon: <IoMdContacts /> },
    { to: "/contact", label: "Contact", icon: <IoMdContact /> },
  ];

  return (
    <>
      {/* 🌐 Mobile Navbar */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full p-4 bg-orange-400 md:hidden relative z-20"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-orange-800 bg-clip-text">
            PEMFT-2025
          </h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-900 text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full w-full bg-orange-500 py-4"
          >
            <div className="flex flex-col space-y-4 mt-2 px-4">
              {links.map((link, i) =>
                link.dropdown ? (
                  <div key={i} className="flex flex-col">
                    <button
                      onClick={() => setIsMembersOpen(!isMembersOpen)}
                      className="hover:text-orange-400 flex items-center gap-2"
                    >
                      {link.icon} {link.label}
                    </button>
                    {isMembersOpen && (
                      <div className="ml-6 mt-2 flex flex-col gap-2">
                        {link.dropdown.map((sub, j) => (
                          <NavLink
                            key={j}
                            to={sub.to}
                            onClick={() => {
                              setIsMembersOpen(false);
                              setIsOpen(false);
                            }}
                            className="hover:text-orange-400"
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={i}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-orange-400 flex items-center gap-2"
                  >
                    {link.icon} {link.label}
                  </NavLink>
                )
              )}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* 💻 Desktop Navbar */}
      <header className="hidden md:flex w-full bg-orange-300 px-8 py-4 justify-between items-center shadow-md relative">
        <h2 className="text-2xl font-semibold text-orange-900 ">
          PEMFT-2025
        </h2>
        <nav className="flex gap-8 relative">
          {links.map((link, i) =>
            link.dropdown ? (
              <div key={i} className="relative" ref={membersRef}>
                <button
                  onClick={() =>
                    setIsDesktopMembersOpen(!isDesktopMembersOpen)
                  }
                  className="flex items-center gap-2 text-orange-700 hover:text-orange-600"
                >
                  {link.icon} {link.label}
                </button>
                {isDesktopMembersOpen && (
                  <div className="absolute left-0 mt-2 bg-orange-300 shadow-lg rounded-lg py-2 w-56 z-30">
                    {link.dropdown.map((sub, j) => (
                      <NavLink
                        key={j}
                        to={sub.to}
                        onClick={() => setIsDesktopMembersOpen(false)}
                        className="block px-4 py-2 hover:bg-orange-900 hover:text-orange-500"
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={i}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 hover:text-orange-400 ${
                    isActive ? "text-orange-900" : "text-orange-700"
                  }`
                }
              >
                {link.icon} {link.label}
              </NavLink>
            )
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;

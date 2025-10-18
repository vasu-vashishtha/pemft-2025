import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa";
import { IoMdContacts, IoMdContact } from "react-icons/io";
import { MdTopic } from "react-icons/md";
import { RiHomeSmile2Fill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMembersOpen, setIsMembersOpen] = useState(false);
  const [isDesktopMembersOpen, setIsDesktopMembersOpen] = useState(false);
  const membersRef = useRef(null);

  // Close desktop Members dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (membersRef.current && !membersRef.current.contains(event.target)) {
        setIsDesktopMembersOpen(false);
      }
    }
    if (isDesktopMembersOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDesktopMembersOpen]);

  const links = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <MdTopic /> },
    { to: "/workshop", label: "Workshop", icon: <MdTopic /> },
    { to: "/conference-topics", label: "Conference Topics", icon: <MdTopic /> },
    { to: "/publication", label: "Publication", icon: <MdTopic /> },
    {
      label: "Members",
      icon: <FaUsers />,
      dropdown: [
        { to: "/advisory-committee", label: "Advisory Committee" },
        { to: "/patrons", label: "Organizing Committee" },
      ],
    },
    { to: "/speakers", label: "Speakers", icon: <RiHomeSmile2Fill /> },
    { to: "/sponsores", label: "Sponsors", icon: <RiHomeSmile2Fill /> },
    { to: "/accommodation", label: "Accommodation", icon: <RiHomeSmile2Fill /> },
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
        className="w-full bg-purple-400 md:hidden fixed top-0 left-0 z-50 shadow-md"
      >
        <div className="flex justify-between items-center px-4 py-3">
          {/* <h2 className="text-lg font-semibold text-white">PEMFT-2025</h2> */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-purple-500 w-full py-4"
          >
            <div className="flex flex-col space-y-4 mt-2 px-6">
              {links.map((link, i) =>
                link.dropdown ? (
                  <div key={i} className="flex flex-col">
                    <button
                      onClick={() => setIsMembersOpen(!isMembersOpen)}
                      className="hover:text-purple-200 flex items-center gap-2 text-white"
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
                            className="hover:text-purple-200 text-white"
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
                    className="hover:text-purple-200 flex items-center gap-2 text-white"
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
      <header className="hidden md:flex w-full bg-purple-300 px-8 py-4 justify-between items-center shadow-md fixed top-0 left-0 z-40">
        {/* <h2 className="text-xl font-bold text-orange-900">PEMFT-2025</h2> */}
        <nav className="flex flex-wrap gap-6 relative">
          {links.map((link, i) =>
            link.dropdown ? (
              <div key={i} className="relative" ref={membersRef}>
                <button
                  onClick={() =>
                    setIsDesktopMembersOpen(!isDesktopMembersOpen)
                  }
                  className="flex items-center gap-2 text-purple-800 hover:text-purple-600"
                >
                  {link.icon} {link.label}
                </button>
                {isDesktopMembersOpen && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-56 z-30">
                    {link.dropdown.map((sub, j) => (
                      <NavLink
                        key={j}
                        to={sub.to}
                        onClick={() => setIsDesktopMembersOpen(false)}
                        className="block px-4 py-2 text-purple-700 hover:bg-purple-100"
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
                  `flex items-center gap-2 transition-colors ${
                    isActive
                      ? "text-purple-900 font-semibold"
                      : "text-purple-700 hover:text-purple-500"
                  }`
                }
              >
                {link.icon} {link.label}
              </NavLink>
            )
          )}
        </nav>
      </header>

      {/* Push content down below fixed navbar */}
      <div className="h-12 md:h-14"></div>
    </>
  );
};

export default Navbar;

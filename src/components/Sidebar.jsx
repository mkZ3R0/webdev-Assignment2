import React from "react";
import {
  FiSliders,
  FiUser,
  FiLogIn,
  FiUserPlus,
  FiBook,
  FiSquare,
  FiCheckSquare,
  FiGrid,
  FiAlignLeft,
  FiCoffee,
  FiBarChart2,
  FiMap,
} from "react-icons/fi";
import SidebarItem from "./SidebarItem";

const SidebarContainer = () => {
  const pages = [
    { label: "Dashboard", icon: FiSliders, href: "/", active: true },
    { label: "Profile", icon: FiUser, href: "/#" },
    { label: "Sign In", icon: FiLogIn, href: "/#" },
    { label: "Sign Up", icon: FiUserPlus, href: "/#" },
    { label: "Blank", icon: FiBook, href: "/#" },
  ];

  const tools = [
    { label: "Buttons", icon: FiSquare, href: "/#" },
    { label: "Forms", icon: FiCheckSquare, href: "/#" },
    { label: "Cards", icon: FiGrid, href: "/#" },
    { label: "Typography", icon: FiAlignLeft, href: "/#" },
    { label: "Icons", icon: FiCoffee, href: "/#" },
  ];

  const plugins = [
    { label: "Charts", icon: FiBarChart2, href: "/#" },
    { label: "Maps", icon: FiMap, href: "/#" },
  ];

  return (
    <nav id="sidebar" className="sidebar w-64 h-screen bg-gray-800 text-white">
      <div className="sidebar-content flex flex-col justify-between h-full overflow-y-auto">
        <div className="p-4">
          <a
            className="sidebar-brand text-xl font-bold flex items-center mb-8"
            href="/"
          >
            <span className="align-middle">AdminKit</span>
          </a>

          <ul className="sidebar-nav space-y-4">
            <li className="sidebar-header text-gray-400 uppercase text-xs">
              Pages
            </li>
            {pages.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                label={item.label}
                href={item.href}
                active={item.active}
              />
            ))}

            <li className="sidebar-header text-gray-400 uppercase text-xs">
              Tools & Components
            </li>
            {tools.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                label={item.label}
                href={item.href}
              />
            ))}

            <li className="sidebar-header text-gray-400 uppercase text-xs">
              Plugins & Addons
            </li>
            {plugins.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                label={item.label}
                href={item.href}
              />
            ))}
          </ul>
        </div>

        <div className="sidebar-cta p-4 bg-gray-700 rounded-lg m-4">
          <div className="sidebar-cta-content">
            <strong className="d-inline-block mb-2 text-sm">
              Upgrade to Pro
            </strong>
            <div className="mb-3 text-xs">
              Are you looking for more components? Check out our premium
              version.
            </div>
            <div className="flex">
              <a
                href="/upgrade-to-pro"
                className="btn btn-primary w-full bg-blue-600 text-white py-2 rounded-md text-center"
              >
                Upgrade to Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarContainer;

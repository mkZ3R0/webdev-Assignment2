import React from "react";

const SidebarItem = ({ icon: Icon, label, href, active }) => {
  return (
    <li className={`sidebar-item ${active ? "active" : ""}`}>
      <a
        className={`sidebar-link flex items-center space-x-2 p-2 rounded-md ${
          active ? "bg-gray-700" : "hover:bg-gray-600"
        }`}
        href={href}
      >
        <Icon className="align-middle" />
        <span className="align-middle">{label}</span>
      </a>
    </li>
  );
};

export default SidebarItem;

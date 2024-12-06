import { useState } from "react";
import avatar from "../assets/avatar.jpg";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="nav-link absolute right-0 dropdown-toggle d-none d-sm-inline-block flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={avatar}
          className="avatar img-fluid rounded me-1"
          alt="Charles Hall"
          style={{ width: "50px", height: "50px" }}
        />
        <span className="text-dark">Charles Hall</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu absolute right-0 mt-16 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
          <a
            className="dropdown-item flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="pages-profile.html"
          >
            <i className="align-middle me-1" data-feather="user"></i> Profile
          </a>
          <a
            className="dropdown-item flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <i className="align-middle me-1" data-feather="pie-chart"></i> Analytics
          </a>
          <div className="dropdown-divider my-1"></div>
          <a
            className="dropdown-item flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="index.html"
          >
            <i className="align-middle me-1" data-feather="settings"></i> Settings & Privacy
          </a>
          <a
            className="dropdown-item flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <i className="align-middle me-1" data-feather="help-circle"></i> Help Center
          </a>
          <div className="dropdown-divider my-1"></div>
          <a
            className="dropdown-item flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            Log out
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

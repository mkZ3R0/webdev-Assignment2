import React from "react";

const ProjectItem = ({ name, start, end, status, assignee }) => {
    return (
      <tr className="text-black hover:bg-gray-100 transition duration-200">
        <td className="px-4 py-2">{name}</td>
        <td className="px-4 py-2 hidden xl:table-cell">{start}</td>
        <td className="px-4 py-2 hidden xl:table-cell">{end}</td>
        <td className="px-4 py-2">
          <span
            className={`px-2 py-1 rounded-full text-white ${
              status === "Done"
                ? "bg-green-500"
                : status === "Cancelled"
                ? "bg-red-500"
                : "bg-yellow-500"
            }`}
          >
            {status}
          </span>
        </td>
        <td className="px-4 py-2 hidden md:table-cell">{assignee}</td>
      </tr>
    );
  };

export default ProjectItem;
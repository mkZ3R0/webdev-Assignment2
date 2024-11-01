import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectsTable = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="text-gray-700 bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 hidden xl:table-cell">Start Date</th>
              <th className="px-4 py-2 hidden xl:table-cell">End Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 hidden md:table-cell">Assignee</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((project) => (
              <ProjectItem
                key={project.id}
                name={project.name}
                start={project.startDate}
                end={project.endDate}
                status={project.status}
                assignee={project.assignee}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  };

// Sample project data for display
const projectData = [
    { id: 1, name: "Project Apollo", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", assignee: "Vanessa Tucker" },
    { id: 2, name: "Project Fireball", startDate: "01/01/2023", endDate: "31/06/2023", status: "Cancelled", assignee: "William Harris" },
    { id: 3, name: "Project Hades", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", assignee: "Sharon Lessman" },
    { id: 4, name: "Project Nitro", startDate: "01/01/2023", endDate: "31/06/2023", status: "In progress", assignee: "Vanessa Tucker" },
    { id: 5, name: "Project Phoenix", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", assignee: "William Harris" },
    { id: 6, name: "Project X", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", assignee: "Sharon Lessman" },
    { id: 7, name: "Project Romeo", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", assignee: "Christina Mason" },
    { id: 8, name: "Project Wombat", startDate: "01/01/2023", endDate: "31/06/2023", status: "In progress", assignee: "William Harris" },
  ];

export default ProjectsTable;
const tasks = [
  {
    id: crypto.randomUUID(),
    title: "Wireframes",
    description: "Set up high-fidelity prototypes with conditional logic",
    tag: "design",
    date: "2025-08-26",
    status: "todo",
  },
  {
    id: crypto.randomUUID(),
    title: "Data Entry",
    description: "Data Entry Cleanup and validation",
    tag: "operations",
    date: "2025-08-27",
    status: "todo",
  },
  {
    id: crypto.randomUUID(),
    title: "Social Media",
    description: "Social Media Scheduling and posting",
    tag: "marketing",
    date: "2025-08-28",
    status: "todo",
  },
  {
    id: crypto.randomUUID(),
    title: "Graphic Design",
    description: "Graphic Design Edits and refinements",
    tag: "creative",
    date: "2025-08-27",
    status: "done",
  },
  {
    id: crypto.randomUUID(),
    title: "Presentation",
    description: "Presentation Slide Design",
    tag: "development",
    date: "2025-08-30",
    status: "done",
  },
  {
    id: crypto.randomUUID(),
    title: "API Integration",
    description: "Integrate payment gateway APIs",
    tag: "backend",
    date: "2025-08-29",
    status: "done",
  },

  {
    id: crypto.randomUUID(),
    title: "Documentation",
    description: "Complete API documentation",
    tag: "documentation",
    date: "2025-08-25",
    status: "in-progress",
  },
  {
    id: crypto.randomUUID(),
    title: "Database Design",
    description: "Database schema and optimization",
    tag: "infrastructure",
    date: "2025-08-24",
    status: "in-progress",
  },
  {
    id: crypto.randomUUID(),
    title: "Software Installation",
    description: "Install and configure development tools",
    tag: "setup",
    date: "2025-08-23",
    status: "in-progress",
  },
];

// const statuses = {
//   todo: "To-do",
//   done: "Done",
//   "in-progress": "In Progress",
// };

const columns = [
  { id: "todo", label: "To-do" },
  { id: "in-progress", label: "In Progress" },
  { id: "done", label: "Done" },
];

const getTasks = () => {
  return tasks;
};

export { columns, getTasks };

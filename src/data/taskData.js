const tasks = [
  {
    id: crypto.randomUUID(),
    title: "Wireframes",
    description: "Set up high-fidelity prototypes with conditional logic",
    tag: "design",
    date: "Aug 26",
    status: "todo",
  },
  {
    id: crypto.randomUUID(),
    title: "Data Entry",
    description: "Data Entry Cleanup and validation",
    tag: "operations",
    date: "Aug 27",
    status: "todo",
  },
  {
    id: crypto.randomUUID(),
    title: "Social Media",
    description: "Social Media Scheduling and posting",
    tag: "marketing",
    date: "Aug 28",
    status: "todo",
  },
  {
    id: crypto.randomUUID(),
    title: "Graphic Design",
    description: "Graphic Design Edits and refinements",
    tag: "creative",
    date: "Aug 27",
    status: "done",
  },
  {
    id: crypto.randomUUID(),
    title: "Presentation",
    description: "Presentation Slide Design",
    tag: "Development",
    date: "Aug 30",
    status: "done",
  },
  {
    id: crypto.randomUUID(),
    title: "API Integration",
    description: "Integrate payment gateway APIs",
    tag: "backend",
    date: "Aug 29",
    status: "done",
  },
  {
    id: crypto.randomUUID(),
    title: "Documentation",
    description: "Complete API documentation",
    tag: "documentation",
    date: "Aug 25",
    status: "in-progress",
  },
  {
    id: crypto.randomUUID(),
    title: "Database Design",
    description: "Database schema and optimization",
    tag: "infrastructure",
    date: "Aug 24",
    status: "in-progress",
  },
  {
    id: crypto.randomUUID(),
    title: "Software Installation",
    description: "Install and configure development tools",
    tag: "setup",
    date: "Aug 23",
    status: "in-progress",
  },
];

const statuses = ["To-do", "Done", "In Progress"];

const getTasks = () => {
  return tasks;
};

export { getTasks, statuses };

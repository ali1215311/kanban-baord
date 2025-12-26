import { useState } from "react";
import Card from "../components/Card";
import SortFilter from "./SortFilter";

const TaskCol = ({ colTitle, tasks }) => {
  const [filterTag, setFilterTag] = useState(null);
  const [sortOpt, setSortOpt] = useState(null);
  const [options, setOptions] = useState(null);

  let filteredTasks = [...tasks];

  if (filterTag || sortOpt) {
    switch (options) {
      case "filter":
        filteredTasks = tasks.filter((t) => t.tag === filterTag);
        break;
      case "sort":
        filteredTasks = [...filteredTasks].sort((a, b) => {
          if (sortOpt === "newest") return new Date(b.date) - new Date(a.date);
          if (sortOpt === "oldest") return new Date(a.date) - new Date(b.date);
        });
        break;

      default:
        [...tasks];
    }
  }

  const handleFilter = (e, t) => {
    e.stopPropagation();
    setFilterTag(t);
    setOptions("filter");
  };

  const handleSort = (e, sortBy) => {
    e.stopPropagation();
    setSortOpt(sortBy);
    setOptions("sort");
  };
  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-gray-900">{colTitle}</h2>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
              {tasks.length}
            </span>
          </div>

          <SortFilter
            tasks={tasks}
            onFilter={handleFilter}
            onSort={handleSort}
          />
        </div>

        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => <Card key={task.id} task={task} />)
          ) : (
            <p className="text-center font-semibold text-2xl text-gray-500">
              No tasks {colTitle === "Done" ? "have been done yet" : colTitle}!
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default TaskCol;

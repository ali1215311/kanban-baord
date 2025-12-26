import { useContext } from "react";
import { SearchContext, TaskContext } from "../contexts";
import { columns } from "../data/taskData";
import TaskCol from "./TaskCol";

const Board = () => {
  const { tasks } = useContext(TaskContext);
  const { searchText } = useContext(SearchContext);
  let searchedTasks = [];
  if (searchText !== "") {
    searchedTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchText)
    );
  }
  return (
    <>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        {searchText !== "" ? (
          <div className="flex flex-col gap-6 xl:flex-row h-full">
            {columns.map((s) => (
              <TaskCol
                key={s.id}
                colTitle={s.label}
                tasks={searchedTasks.filter((t) => {
                  return t.status === s.id;
                })}
                searchRes={true}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6 xl:flex-row h-full">
            {columns.map((s) => (
              <TaskCol
                key={s.id}
                colTitle={s.label}
                tasks={tasks.filter((t) => {
                  return t.status === s.id;
                })}
                searchRes={false}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Board;

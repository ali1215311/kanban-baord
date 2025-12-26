import { useContext } from "react";
import { TaskContext } from "../contexts";
import { columns } from "../data/taskData";
import TaskCol from "./TaskCol";

const Board = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div className="flex flex-col gap-6 xl:flex-row h-full">
          {columns.map((s) => (
            <TaskCol
              key={s.id}
              colTitle={s.label}
              tasks={tasks.filter((t) => {
                return t.status === s.id;
              })}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Board;

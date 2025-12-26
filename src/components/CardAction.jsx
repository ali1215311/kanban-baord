import { useContext } from "react";
import { FormData, ShowModal, TaskContext } from "../contexts";
import { columns } from "../data/taskData";

const CardAction = ({ status, task }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { setShowModal } = useContext(ShowModal);
  const { formData, setFormData } = useContext(FormData);
  const moveTo = columns.filter((c) => c.id !== status);

  const handleMove = (action, t) => {
    const updatedTask = { ...t, status: action };
    const updatedTaskList = tasks.map((main) => {
      if (main.id === t.id) {
        return updatedTask;
      } else {
        return main;
      }
    });
    setTasks(updatedTaskList);
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-50">
        <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Move to
        </p>
        {moveTo.map((item) => (
          <button
            type="button"
            className="w-full text-left px-4 py-2 hover:bg-gray-50"
            key={item.id}
            onMouseDown={() => handleMove(item.id, task)}
          >
            {item.label}
          </button>
        ))}

        <div className="border-t border-gray-100 mt-2 pt-2 space-y-1">
          <button
            type="button"
            className="w-full text-left px-4 py-2 hover:bg-gray-50"
            onMouseDown={() => {
              setShowModal({
                ...setShowModal,
                isOpen: true,
                isEditing: true,
              });
              setFormData({ ...formData, ...task });
            }}
          >
            Edit Card
          </button>
          <button
            type="button"
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
            onMouseDown={() => handleDeleteTask(task.id)}
          >
            Delete Card
          </button>
        </div>
      </div>
    </>
  );
};
export default CardAction;

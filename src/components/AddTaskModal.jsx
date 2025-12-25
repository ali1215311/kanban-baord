import { useContext, useEffect, useRef, useState } from "react";
import { ShowModal, TaskContext } from "../contexts";

const AddTaskModal = ({ onClose }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { showModal } = useContext(ShowModal);
  let editing = showModal.isEditing;
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "design",
    date: "",
    status: "todo",
  });

  const modalRef = useRef();

  const handleBackDropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      ...formData,
    };
    setTasks([...tasks, newTask]);
    setFormData({
      title: "",
      description: "",
      tag: "",
      date: "",
      status: "",
    });
    console.log(tasks);

    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div
        className="grid place-items-center fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={handleBackDropClick}
      >
        <div ref={modalRef} className="max-w-4xl mx-auto px-4 py-10 sm:py-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <button
                className="inline-flex items-center gap-2 text-sm text-white hover:text-gray-900 cursor-pointer"
                onClick={onClose}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  ></path>
                </svg>
                Back to board
              </button>

              <h1 className="text-3xl font-bold text-gray-900 mt-8">
                {editing ? "Edit Task" : "Add Task"}
              </h1>
              <p className="text-sm text-white">
                {editing
                  ? "Edit your created task"
                  : "Create a card for your board."}
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Task Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="e.g. Wireframes"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Task Subtitle / Description
                  </label>
                  <input
                    id="description"
                    name="description"
                    placeholder="Add context or acceptance criteria"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="tag"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tag
                  </label>
                  <select
                    id="tag"
                    name="tag"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                    onChange={handleChange}
                    required
                    defaultValue={"design"}
                  >
                    <option value="design">Design</option>
                    <option value="operations">Operations</option>
                    <option value="marketing">Marketing</option>
                    <option value="creative">Creative</option>
                    <option value="development">Development</option>
                    <option value="backend">Backend</option>
                    <option value="setup">Setup</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="documentation">Documentation</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                    onChange={handleChange}
                  >
                    <option value="todo">To-do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                >
                  {editing ? "Save" : "Add Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddTaskModal;

import CardAction from "./CardAction";

const Card = ({ task }) => {
  return (
    <>
      <div
        className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
        data-card="wireframes"
        data-column="todo"
      >
        <CardAction />
        <div className="mb-3">
          <h3 className="font-semibold text-gray-900 text-sm">{task.title}</h3>
        </div>
        <p className="text-xs text-gray-600 mb-4">{task.description}</p>
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`inline-block px-2.5 py-1 ${task.tag} text-xs font-medium rounded`}
          >
            {task.tag.charAt(0).toUpperCase() + task.tag.slice(1)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          {task.date}
        </div>
      </div>
    </>
  );
};
export default Card;

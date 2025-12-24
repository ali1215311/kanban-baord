const CardAction = () => {
  return (
    <>
      <div
        className="absolute top-4 right-4 text-gray-500"
        data-card-menu-container
      >
        <button
          type="button"
          className="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
          data-card-menu-toggle="wireframes-menu"
          aria-label="Open card menu"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
          </svg>
        </button>
        <div
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
          id="wireframes-menu"
          data-card-menu
        >
          <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Move to
          </p>
          <button
            type="button"
            className="w-full text-left px-4 py-2 hover:bg-gray-50"
          >
            In Progress
          </button>
          <button
            type="button"
            className="w-full text-left px-4 py-2 hover:bg-gray-50"
          >
            Done
          </button>
          <div className="border-t border-gray-100 mt-2 pt-2 space-y-1">
            <button
              type="button"
              className="w-full text-left px-4 py-2 hover:bg-gray-50"
            >
              Edit Card
            </button>
            <button
              type="button"
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
            >
              Delete Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardAction;

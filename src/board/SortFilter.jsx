import { useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

const SortFilter = ({ tasks, onFilter, onSort }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const filterRef = useRef();
  const sortRef = useRef();

  const tags = [...new Set(tasks.map((task) => task.tag))];

  useClickOutside(filterRef, () => setOpenFilter(false));
  useClickOutside(sortRef, () => setOpenSort(false));

  return (
    <>
      <div className="ml-auto flex items-center gap-2">
        <div className="relative" ref={filterRef}>
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
            onMouseDown={(e) => {
              e.stopPropagation();
              setOpenFilter(!openFilter);
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414V19a1 1 0 01-.553.894l-2 1A1 1 0 0110 20v-6.293L3.293 7.293A1 1 0 013 6.586V4z"
              ></path>
            </svg>
            Filter
          </button>
          {openFilter && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40">
              <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Filter by tag
              </p>
              {tags.map((tag) => {
                return (
                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 hover:bg-gray-50"
                    key={tag}
                    onMouseDown={(e) => onFilter(e, tag)}
                  >
                    {tag[0].toUpperCase() + tag.slice(1)}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="relative" ref={sortRef}>
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
            onMouseDown={(e) => {
              e.stopPropagation();
              setOpenSort(!openSort);
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M8 12h12M12 18h8"
              ></path>
            </svg>
            Sort
          </button>
          {openSort && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40">
              <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Sort by date
              </p>
              <button
                type="button"
                className="w-full text-left px-4 py-2 hover:bg-gray-50"
                onMouseDown={(e) => onSort(e, "newest")}
              >
                Newest first
              </button>
              <button
                type="button"
                className="w-full text-left px-4 py-2 hover:bg-gray-50"
                onMouseDown={(e) => onSort(e, "oldest")}
              >
                Oldest first
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default SortFilter;

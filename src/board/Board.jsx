import DoneCol from "./DoneCol";
import InProgressCol from "./InProgressCol";
import ToDoCol from "./ToDoCol";

const Board = () => {
  return (
    <>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div className="flex flex-col gap-6 xl:flex-row h-full">
          {/* <!-- Todo Column --> */}
          <ToDoCol />

          {/* <!-- In Progress Column --> */}
          <InProgressCol />

          {/* <!-- Done Column --> */}
          <DoneCol />
        </div>
      </div>
    </>
  );
};
export default Board;

import { useState } from "react";
import Board from "./board/Board";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { ShowModal, TaskContext } from "./contexts";
import { getTasks } from "./data/taskData";

const App = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [showModal, setShowModal] = useState({
    isOpen: false,
    isEditing: false,
  });
  return (
    <>
      <ShowModal value={{ showModal, setShowModal }}>
        <TaskContext value={{ tasks, setTasks }}>
          <div className="min-h-screen flex flex-col lg:flex-row">
            <Sidebar />
            <main className="flex-1 flex flex-col min-h-0">
              <Header />
              <Board />
            </main>
          </div>
        </TaskContext>
      </ShowModal>
    </>
  );
};
export default App;

import { useState } from "react";
import Board from "./board/Board";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { FormData, SearchContext, ShowModal, TaskContext } from "./contexts";
import { getTasks } from "./data/taskData";

const App = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [showModal, setShowModal] = useState({
    isOpen: false,
    isEditing: false,
  });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "design",
    date: "",
    status: "todo",
  });
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <SearchContext value={{ searchText, setSearchText }}>
        <FormData value={{ formData, setFormData }}>
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
        </FormData>
      </SearchContext>
    </>
  );
};
export default App;

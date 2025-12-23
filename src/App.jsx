import Board from "./board/Board";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 flex flex-col min-h-0">
          <Header />
          <Board />
        </main>
      </div>
    </>
  );
};
export default App;

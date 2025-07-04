import { TasksProvider } from "./tasks-store";
import { TasksHeader } from "./components/tasks-header";
import { TasksBody } from "./components/tasks-body";

function AppContent() {
  console.log("Rendering AppContent");

  return (
    <div className="m-5 p-5 flex flex-col gap-2">
      <span>Zustand</span>
      <TasksHeader />
      <TasksBody />
    </div>
  );
}

function App() {
  console.log("Rendering App");

  return (
    <TasksProvider>
      <AppContent />
    </TasksProvider>
  );
}

export default App;

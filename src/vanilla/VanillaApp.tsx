import { TasksProvider } from "./tasks-context";
import { TasksHeader } from "./components/tasks-header";
import { TasksBody } from "./components/tasks-body";
import { AddNewTask } from "./components/add-new-task";
import { TasksCount } from "./components/tasks-count";
import { Filter } from "./components/tasks-filter";

function App() {
  console.log("Rendering App");

  return (
    <div className="m-5 p-5 flex flex-col gap-2">
      <VanillaLabel />
      <AddNewTask />
      <TasksCount />
      <TasksHeader />
      <Filter />
      <TasksBody />
    </div>
  );
}

const VanillaLabel = () => {
  console.log("Rendering VanillaLabel");
  return <span>Vanilla</span>;
};

function RenderApp() {
  console.log("Rendering App");

  return (
    <TasksProvider>
      <App />
    </TasksProvider>
  );
}

export default RenderApp;

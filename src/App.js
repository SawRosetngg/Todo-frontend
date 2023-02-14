import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Contents from "./components/Contents";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [tasks, setTasks] = useState([
    {
      _id: 1,
      name: "tasks 1",
      description: "task description",
      dueTime: "Today",
    },
    {
      _id: 2,
      name: "tasks 2",
      description: "task description",
      dueTime: "Today",
    },
    {
      _id: 3,
      name: "tasks 3",
      description: "task description",
      dueTime: "Tomorrow",
    },
    {
      _id: 4,
      name: "tasks 4",
      description: "task description",
      dueTime: "Today",
    },
    {
      _id: 5,
      name: "tasks 5",
      description: "task description",
      dueTime: "Today",
    },
  ]);
  const [project, setProject] = useState();

  const handleOnProjectClick = (project) => {
    setProject(project);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Sidebar handleOnProjectClick={handleOnProjectClick} />
          </div>
          <div className="col-6">
            <Contents tasks={tasks} project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

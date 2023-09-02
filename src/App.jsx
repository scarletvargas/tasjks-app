import "./App.css";
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <div className="task-app">
      <div className="container-title">
        <h1>Task App <small>By Sv-Dev</small></h1>
      </div>
      <div className="main-list-tasks">
        <h2>My Tasks</h2>
        <ListTasks />
      </div>
    </div>
  );
}

export default App;

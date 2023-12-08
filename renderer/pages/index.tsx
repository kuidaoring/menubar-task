import AddTask from "../components/AddTask";
import Tab from "../components/Tab";
import TaskList from "../components/TaskList";

const TaskPage = () => {
  return (
    <div className="dark:text-white text-sm">
      <Tab active="task" />
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TaskPage;

import AddTask from "../components/AddTask";
import Tab from "../components/Tab";
import TaskList from "../components/TaskList";

const TodayPage = () => {
  return (
    <div className="dark:text-white text-sm">
      <Tab active="today" />
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TodayPage;

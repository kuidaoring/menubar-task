import { GetServerSideProps } from "next";
import AddTask from "../components/AddTask";
import Tab from "../components/Tab";
import TaskList from "../components/TaskList";
import { getTodayTasks } from "../utils/TaskRepository";

const TodayPage = ({ tasks }) => {
  return (
    <div className="dark:text-white text-sm">
      <Tab active="today" />
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TodayPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      tasks: await getTodayTasks(),
    },
  };
};

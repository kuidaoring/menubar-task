import { GetServerSideProps } from "next";
import AddTask from "../components/AddTask";
import Tab from "../components/Tab";
import TaskList from "../components/TaskList";
import { getAllTasks } from "../utils/TaskRepository";

const TaskPage = ({ tasks }) => {
  return (
    <div className="dark:text-white text-sm">
      <Tab active="task" />
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      tasks: await getAllTasks(),
    },
  };
};

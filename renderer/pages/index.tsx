import { GetServerSideProps } from "next";
import AddTask from "../components/AddTask";
import Tab from "../components/Tab";
import TaskList from "../components/TaskList";
import { getAllTasks } from "../utils/TaskRepository";
import { useState } from "react";

const TaskPage = ({ initTasks }) => {
  const [tasks, setTasks] = useState(initTasks);
  const addTaskHandler = (id, title) => {
    setTasks((prev) => {
      const newTask = {
        id: id,
        title: title,
        description: null,
        dueDate: null,
        isToday: false,
        completed: false,
      };
      return [...prev, newTask];
    });
  };
  return (
    <div className="dark:text-white text-sm">
      <Tab active="task" />
      <AddTask handler={addTaskHandler} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      initTasks: await getAllTasks(),
    },
  };
};

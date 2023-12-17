import { GetServerSideProps } from "next";
import AddTask from "../components/AddTask";
import Tab from "../components/Tab";
import TaskList from "../components/TaskList";
import { getTodayTasks } from "../utils/TaskRepository";
import { useState } from "react";

const TodayPage = ({ initTasks }) => {
  const [tasks, setTasks] = useState(initTasks);
  const addTaskHandler = (id, title) => {
    setTasks((prev) => {
      const newTask = {
        id: id,
        title: title,
        description: null,
        dueDate: null,
        isToday: true,
        completed: false,
      };
      return [...prev, newTask];
    });
  };
  const taskCheckHandler = (id, completed) => {
    setTasks((prev) => {
      prev.find((task) => task.id === id).completed = completed;
      return [...prev];
    });
  };
  return (
    <div className="dark:text-white text-sm">
      <Tab active="today" />
      <AddTask handler={addTaskHandler} />
      <TaskList tasks={tasks} taskCheckHandler={taskCheckHandler} />
    </div>
  );
};

export default TodayPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      initTasks: await getTodayTasks(),
    },
  };
};

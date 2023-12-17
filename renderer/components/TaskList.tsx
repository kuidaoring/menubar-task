import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks, taskCheckHandler }) => {
  return (
    <ul className="divide-y dark:divide-white/[0.3] dark:border-t dark:border-white/[0.3]">
      {tasks.map((task) => {
        return <TaskListItem task={task} handler={taskCheckHandler} />;
      })}
    </ul>
  );
};

export default TaskList;

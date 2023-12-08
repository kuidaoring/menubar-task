import TaskListItem from "./TaskListItem";

const TaskList = () => {
  return (
    <ul className="divide-y dark:divide-white/[0.3] dark:border-t dark:border-white/[0.3]">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => {
        return <TaskListItem value={value} />;
      })}
    </ul>
  );
};

export default TaskList;

import Link from "next/link";
import { format, parseISO } from "date-fns";

const TaskListItem = ({ task, handler }) => {
  return (
    <li className="flex flex-row py-1" key={task.id}>
      <div className="flex-none w-10 flex justify-center">
        <input
          type="checkbox"
          className="rounded self-center"
          checked={task.completed}
          onChange={(e) => handler(task.id, !task.completed)}
        />
      </div>
      <Link href={`/detail/${task.id}`}>
        <div className="flex-glow">
          <p className="">{task.title}</p>
          <p className="divide-x dark:divide-white/[0.3] dark:text-white/[0.7] text-xs">
            {task.isToday && (
              <span className="text-center px-1">🚀 今日の予定</span>
            )}
            {task.dueDate && (
              <span className="text-center px-1">
                🗓 {format(parseISO(task.dueDate), "Y/M/d")}
              </span>
            )}
            {task.description && (
              <span className="text-center px-1">📝 メモ</span>
            )}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default TaskListItem;

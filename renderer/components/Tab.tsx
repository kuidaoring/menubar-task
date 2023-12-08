import Link from "next/link";

type Props = {
  active: "today" | "task";
};

const Tab: React.FC<Props> = ({ active }) => {
  const todayClass =
    active === "today"
      ? "active dark:text-blue-500 dark:border-blue-500"
      : "hover:border-gray-300 dark:hover:text-gray-300";
  const taskClass =
    active === "task"
      ? "active dark:text-blue-500 dark:border-blue-500"
      : "hover:border-gray-300 dark:hover:text-gray-300";
  return (
    <div className="text-center border-b dark:text-gray-400 dark:border-gray-700">
      <ul className="flex -mb-px">
        <Link
          href="/today"
          className={`me-2 basis-1/2 p-2 border-b-2 border-transparent rounded-t-lg ${todayClass}`}
        >
          <li>今日の予定</li>
        </Link>
        <Link
          href="/"
          className={`me-2 basis-1/2 p-2 border-b-2 border-transparent rounded-t-lg ${taskClass}`}
        >
          <li>タスク</li>
        </Link>
      </ul>
    </div>
  );
};

export default Tab;

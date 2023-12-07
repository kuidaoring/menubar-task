import {
  CalendarIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const TaskPage = () => {
  return (
    <div className="dark:text-white text-sm">
      <div className="text-center border-b dark:text-gray-400 dark:border-gray-700">
        <ul className="flex -mb-px">
          <Link
            href="/today"
            className="me-2 basis-1/2 p-2 border-b-2 border-transparent rounded-t-lg hover:border-gray-300 dark:hover:text-gray-300"
          >
            <li>今日の予定</li>
          </Link>
          <Link
            href="/"
            className="me-2 basis-1/2 p-2 border-b-2 border-transparent active first-letter:rounded-t-lg dark:text-blue-500 dark:border-blue-500"
          >
            <li>タスク</li>
          </Link>
        </ul>
      </div>
      <ul className="divide-y dark:divide-white/[0.3]">
        <li>
          <input
            type="text"
            className="w-full bg-transparent border-none focus:ring-0 text-sm"
            placeholder="タスクを追加"
          />
        </li>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => {
          return (
            <li className="flex flex-row py-1">
              <div className="flex-none w-10 flex justify-center">
                <input type="checkbox" className="rounded self-center" />
              </div>
              <Link href={`/detail/${value}`}>
                <div className="flex-glow">
                  <p className="">
                    title とても長いテキストです。とても長いテキストです。 title
                    とても長いテキストです。とても長いテキストです。 title
                    とても長いテキストです。とても長いテキストです。
                  </p>
                  <p className="divide-x dark:divide-white/[0.3] dark:text-white/[0.7] text-xs">
                    <span className="text-center px-1 self-center">
                      <RocketLaunchIcon className="w-3 h-3 inline-block mx-1 mb-1" />
                      今日の予定
                    </span>
                    <span className="text-center px-1">
                      <CalendarIcon className="w-3 h-3 inline-block mx-1 mb-1" />
                      2023/12/06
                    </span>
                    <span className="text-center px-1">
                      <DocumentTextIcon className="w-3 h-3 inline-block mx-1 mb-1" />
                      メモ
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskPage;

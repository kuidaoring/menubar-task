import Link from "next/link";

const TaskPage = () => {
  return (
    <div className="dark:text-white text-sm">
      <ul className="divide-y dark:divide-white/[0.3]">
        <li>
          <input
            type="text"
            className="border-none w-full bg-transparent"
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
                    <span className="text-center px-1">今日の予定</span>
                    <span className="text-center px-1">2023/12/06</span>
                    <span className="text-center px-1">メモ</span>
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

import Link from "next/link";

const DetailPage = () => {
  return (
    <div className="dark:text-white text-sm">
      <ul className="divide-y dark:divide-white/[0.3]">
        <li>
          <Link href="/">home</Link>
        </li>
        <li className="flex flex-row py-1">
          <div className="flex-none w-10 flex justify-center">
            <input type="checkbox" className="rounded self-center" />
          </div>
          <p className="flex-glow">
            title とても長いテキストです。とても長いテキストです。 title
            とても長いテキストです。とても長いテキストです。 title
            とても長いテキストです。とても長いテキストです。
          </p>
        </li>
        <li className="py-1">
          <div className="flex flex-row">
            <div className="flex-none w-10 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <button className="dark:text-white">今日の予定に追加</button>
          </div>
        </li>
        <li className="py-1">
          <div className="flex flex-row">
            <div className="flex-none w-10 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 dark:text-white self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </div>
            <p className="dark:text-white">期限日</p>
          </div>
        </li>
        <li>
          <textarea
            className="border-none w-full bg-transparent"
            placeholder="メモを追加"
          ></textarea>
        </li>
      </ul>
    </div>
  );
};

export default DetailPage;

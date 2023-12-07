import Link from "next/link";
import {
  RocketLaunchIcon,
  CalendarIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

const DetailPage = () => {
  return (
    <div className="dark:text-white text-sm">
      <ul className="divide-y dark:divide-white/[0.3]">
        <li className="flex flex-row py-1">
          <Link href="/">
            <div className="flex-none w-10 flex justify-center">
              <ChevronLeftIcon className="w-6 h-6 self-center" />
            </div>
          </Link>
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
              <RocketLaunchIcon className="w-6 h-6 self-center" />
            </div>
            <button className="self-center">今日の予定に追加</button>
          </div>
        </li>
        <li className="py-1">
          <div className="flex flex-row">
            <div className="flex-none w-10 flex justify-center">
              <CalendarIcon className="w-6 h-6 self-center" />
            </div>
            <p className="self-center">期限日</p>
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

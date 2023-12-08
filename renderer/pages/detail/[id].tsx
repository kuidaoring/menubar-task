import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  return (
    <div className="dark:text-white text-sm">
      <ul className="divide-y dark:divide-white/[0.3]">
        <li className="flex flex-row py-1">
          <button
            onClick={() => router.back()}
            className="flex-none w-10 flex justify-center self-center"
          >
            ↩️
          </button>
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
            <p className="flex-none w-10 flex justify-center self-center">🚀</p>
            <button className="self-center">今日の予定に追加</button>
          </div>
        </li>
        <li className="py-1">
          <div className="flex flex-row">
            <p className="flex-none w-10 flex justify-center self-center">🗓</p>
            <p className="self-center">2023/12/08</p>
          </div>
        </li>
        <li>
          <textarea
            className="border-none w-full bg-transparent text-sm focus:ring-0"
            placeholder="メモを追加"
          />
        </li>
      </ul>
    </div>
  );
};

export default DetailPage;

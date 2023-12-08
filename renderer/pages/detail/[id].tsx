import { useRouter } from "next/router";
import { ButtonHTMLAttributes, forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DetailPage = () => {
  const router = useRouter();
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const CustomDateInput = forwardRef<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
  >(({ value, onClick }, ref) => {
    return (
      <button onClick={onClick} ref={ref}>
        {dueDate ? dueDate.toLocaleDateString() : "期限日を設定"}
      </button>
    );
  });
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
            <DatePicker
              customInput={<CustomDateInput />}
              onChange={(date) => setDueDate(date)}
              popperPlacement="bottom"
            />
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

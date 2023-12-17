const AddTask = ({ handler }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = (formData.get("title") as string) || "";
        if (title.trim() === "") {
          return;
        }
        handler(title);
        e.currentTarget.reset();
      }}
    >
      <div className="flex flex-row">
        <input
          type="text"
          name="title"
          className="w-full bg-transparent border-none focus:ring-0 text-sm"
          placeholder="タスクを追加"
        />
      </div>
    </form>
  );
};

export default AddTask;

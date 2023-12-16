import { parse } from "date-fns";

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    dueDate: parse("2023/12/17", "yyyy/MM/dd", new Date()).toISOString(),
    isToday: true,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    dueDate: parse("2023/12/18", "yyyy/MM/dd", new Date()).toISOString(),
    isToday: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    dueDate: parse("2023/12/19", "yyyy/MM/dd", new Date()).toISOString(),
    isToday: true,
  },
  {
    id: 4,
    title: "Task 4",
    description: "Description 4",
    dueDate: parse("2023/12/20", "yyyy/MM/dd", new Date()).toISOString(),
    isToday: false,
  },
  {
    id: 5,
    title: "Task 5",
    description: "Description 5",
    dueDate: null,
    isToday: false,
  },
];

export async function getAllTasks() {
  return tasks;
}

export async function getTodayTasks() {
  return tasks.filter((task) => task.isToday);
}

export async function getTask(id: number) {
  return tasks.find((task) => task.id == id);
}

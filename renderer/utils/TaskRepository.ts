import { parse } from "date-fns";
import { nanoid } from "nanoid";

const tasks = [
  {
    id: "abc",
    title: "Task 1",
    description: "Description 1",
    dueDate: parse("2023/12/17", "yyyy/MM/dd", new Date()).toISOString(),
    isToday: true,
    completed: false,
  },
  {
    id: "def",
    title: "Task 2",
    description: "Description 2",
    dueDate: parse("2023/12/18", "yyyy/MM/dd", new Date()).toISOString(),
    isToday: false,
    completed: true,
  },
  {
    id: "ghi",
    title: "Task 3",
    description: "Description 3",
    dueDate: parse("2023/12/19", "yyyy/MM/dd", new Date()).toISOString(),
    isToday: true,
    completed: false,
  },
  {
    id: "jkl",
    title: "Task 4",
    description: "Description 4",
    dueDate: parse("2023/12/20", "yyyy/MM/dd", new Date()).toISOString(),
    isToday: false,
    completed: true,
  },
  {
    id: "mno",
    title: "Task 5",
    description: "Description 5",
    dueDate: null,
    isToday: false,
    completed: true,
  },
];

export async function getAllTasks() {
  return tasks;
}

export async function getTodayTasks() {
  return tasks.filter((task) => task.isToday);
}

export async function getTask(id: string) {
  return tasks.find((task) => task.id === id);
}

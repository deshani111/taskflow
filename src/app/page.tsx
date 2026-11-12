"use client";

import { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask() {
    const title = taskInput.trim();

    if (title === "") {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);

    setTaskInput("");
  }

  function toggleTask(id: number) {
  setTasks((previousTasks) =>
    previousTasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}

function deleteTask(id: number) {
  setTasks((previousTasks) =>
    previousTasks.filter((task) => task.id !== id)
  );
}

  return (
    <main className="min-h-screen bg-blue-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900">
          TaskFlow — My Productivity Hub
        </h1>

        <p className="mt-3 text-slate-600">
          Organize your tasks and stay productive.
        </p>

        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">
            My Tasks
          </h2>

          <div className="mt-5 flex gap-3">
            <input
              type="text"
              value={taskInput}
              onChange={(event) =>
                setTaskInput(event.target.value)
              }
              placeholder="Enter a new task"
              className="flex-1 rounded-lg border border-gray-300 p-3 text-slate-900"
            />

            <button
              onClick={addTask}
              className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
            >
              Add Task
            </button>
          </div>

          <p className="mt-5 text-slate-600">
            Total Tasks: {tasks.length}
          </p>

          <ul className="mt-4 space-y-3">
            {tasks.map((task) => (
  <li
    key={task.id}
    className="flex items-center justify-between gap-3 rounded-lg bg-gray-100 p-3"
  >
    <div className="flex items-center gap-3">
      <input type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        aria-label={`Mark ${task.title} as completed`}
        className="h-5 w-5 cursor-pointer"
      />

      <span
        className={
          task.completed
            ? "text-gray-400 line-through"
            : "text-slate-800"
        }
      >
        {task.title}
      </span>
    </div>

    <button
      onClick={() => deleteTask(task.id)}
      className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700 hover:bg-red-200"
    >
      Delete
    </button>
  </li>
))}
          </ul>

          {tasks.length === 0 && (
            <p className="mt-4 text-slate-500">
              No tasks available. Add your first task!
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
import { useState } from "react";

export default function Task() {
  const [enteredTask, setEnteredTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    if (enteredTask.trim() === "") {
      return;
    }
    const newTask = {
      id: crypto.randomUUID(),
      text: enteredTask,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setEnteredTask("");
  }

  function handleDeleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="mt-8 bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-stone-800 mb-4"> Tasks</h3>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={enteredTask}
          onChange={(e) => setEnteredTask(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-md"
          placeholder="Enter a new task..."
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-stone-800 text-white rounded-md hover:bg-stone-950"
        >
          Add
        </button>
      </div>
      {tasks.length === 0 && (
        <p className="text-stone-500">No tasks added yet.</p>
      )}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-stone-100 px-3 py-2 rounded-md "
          >
            <span>{task.text}</span>
            <button
              onClick={() => {
                handleDeleteTask(task.id);
              }}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

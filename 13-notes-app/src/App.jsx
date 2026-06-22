import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);
    console.log(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen bg-zinc-900 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel */}
        <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold text-white">Create Note</h2>
          <p className="text-zinc-400 mt-2">Add a title and description.</p>

          <form onSubmit={(e) => submitHandler(e)} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Note title"
              className="w-full p-3 rounded-lg bg-zinc-700 text-white border border-zinc-600 outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              rows="5"
              placeholder="Write your note..."
              className="w-full p-3 rounded-lg bg-zinc-700 text-white border border-zinc-600 outline-none"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
            >
              Create Note
            </button>
          </form>
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-white mb-6">My Notes</h2>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {task.map(function (elem, idx) {
              return (
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <h3 className="font-bold text-lg">{elem.title}</h3>
                  <p className="text-gray-600 mt-2">{elem.details}</p>
                  <button
                    className="bg-red-500 p-2 rounded"
                    onClick={() => deleteNote(idx)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

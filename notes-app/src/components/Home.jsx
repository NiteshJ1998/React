import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const noteId = searchParams.get("noteId");

  function createNotes() {
    const notes = {
      title: title,
      content: value,
      _id: noteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
  }
  return (
    <div>
      <div className="">
        <input
          className="p-2 m-2 border-2 w-[88%] text-amber-50 rounded-xl"
          type="text"
          placeholder="Enter title here "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createNotes}
          className="bg-blue-400 p-2 rounded-xl text-white text-xl"
        >
          {noteId ? "Update Note" : "Create Note"}
        </button>
      </div>
      <div className="mt-4">
        <textarea
          className="rounded-2xl mt-2 border-2 min-w-[500px] p-3 text-2xl text-amber-50"
          value={value}
          placeholder="enter content"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const notesId = searchParams.get("notesId");

  function createNotes() {}
  return (
    <div>
      <div className="">
        <input
          className="p-2 m-2 border-2 text-amber-50 rounded-xl"
          type="text"
          placeholder="Enter title here "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-blue-400 p-2 rounded-xl text-white text-xl">
          {notesId ? "Update Note" : "Create Note"}
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../redux/pasteSlice";

function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      //update
      dispatch(updateToPaste(paste));
    } else {
      //create
      dispatch(addToPaste(paste));
    }

    // after creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="rounded-sm place-content-evenly mt-2"
          type="text"
          placeholder="Enter text here "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button
        onClick={createPaste}
        className="rounded-sm place-content-evenly mt-2"
      >
        {pasteId ? "Update My paste" : "Create My paste"}
      </button>
      <div className="mt-4">
        <textarea
          className="rounded-2xl mt-4 min-w-[500] p-4"
          value={value}
          placeholder="Enter content here "
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
}

export default Home;

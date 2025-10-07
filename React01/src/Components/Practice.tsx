import { useState } from "react";

const Practice = (e: any) => {
  const [showData, setShowData] = useState();
  const displayData = () => {};
  return (
    <div>
      <h2>Name</h2>
      <input type="text" placeholder="name" />
      <h2>email</h2>
      <input onChange={(e)=>{
        setShowData(e) 
      }} type="text" placeholder="email" />
      <div>
        <button onClick={displayData }>Submit</button>
      </div>
      <p>Information {showData}</p>
    </div>
  );
};

export default Practice;

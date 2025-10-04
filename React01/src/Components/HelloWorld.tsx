import { useState } from "react";

const HelloWorld = () => {
  const [hide, setHide] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);

  const nitesh = () => {
    debugger;
    const currentState = hide;
    const udpatedState = !currentState;
    setHide(udpatedState);
  };

  const saveName = (eventReceived: any) => {
    debugger;
    const updatedName = eventReceived.target.value;
    setName(updatedName);
  };

  const saveEmail = (event: any) => {
    const email = event.target.value;
    setEmail(email);
  };

  return (
    <div>
      <br />
      <h1>Name</h1>
      <input
        type="Name"
        onChange={(event) => {
          saveName(event);
        }}
      />
      <h1>Email</h1>
      <input
        type="email"
        onChange={(event) => {
          saveEmail(event);
        }}
      />
      <br />
      <div>
        <button
          onClick={() => {
            nitesh();
          }}
        >
          Submit
        </button>
      </div>

      {hide ? <div>Information : </div> : null}
      {hide ? (
        <div>
          {name},{email}
        </div>
      ) : null}
    </div>
  );
};

export default HelloWorld;

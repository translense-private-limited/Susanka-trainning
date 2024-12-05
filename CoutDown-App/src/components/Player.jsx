import { useRef, useState } from "react";

export default function Player() {
  const [enteredName, setEnteredName] = useState("");
  const data = useRef(null);
  function handleClick() {
    setEnteredName(data.current.value);
    data.current.value = " ";
  }
  return (
    <section id="player">
      <h1>THE ALMOST FINAL COUNTDOWN </h1>
      <h2>Welcome {enteredName ?? "Unknowning Entity"}</h2>
      <p>
        <input type="text" ref={data} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

import React, { useState } from "react";

function App() {
  //Destruction example

  // const rgb = [9, 132, 227];
  // console.log(rgb[1]);

  // JS6

  // const [red, green, blue] = [9, 132, 225];
  // console.log(red);

  // useState returneaza prima data o valoare(count), a doua returneaza o functie(seCount)

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

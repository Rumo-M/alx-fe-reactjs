import React, {useState}from "react";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p style={{color:"red"}}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{backgroundColor:"yellow"}}>Increment</button>
      <button onClick={() => setCount(0)} style={{backgroundColor:"orange"}}>Reset</button>
      <button onClick={() => setCount(count - 1)} style={{backgroundColor:"pink"}}>Decrement</button>
      
    </div>
  );
}
export default Counter;


import React, { useState } from "react";
import { version } from "react/package.json";

export const RootComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h5>React version {version}</h5>

      <button onClick={() => setCount(count - 1)}>-1</button>
      <span style={{ padding: "8px" }}>Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

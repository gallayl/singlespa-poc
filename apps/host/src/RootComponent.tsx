import React, { useState } from "react";
import { version } from "react/package.json";
import { Spa1Parcel } from "./Spa1Parcel";
import { Spa2Parcel } from "./Spa2Parcel";

export const RootComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          margin: "16px",
          padding: "16px",
          border: "1px solid #ccc",
        }}
      >
        <h5>HOST - React version {version}</h5>

        <button onClick={() => setCount(count - 1)}>-1</button>
        <span style={{ padding: "8px" }}>Count: {count}</span>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>

      <div
        style={{
          margin: "16px",
          padding: "16px",
          border: "1px solid #ccc",
        }}
      >
        <h3>Clients - Parcel version</h3>
        <Spa1Parcel />
        <Spa2Parcel />
      </div>
    </>
  );
};

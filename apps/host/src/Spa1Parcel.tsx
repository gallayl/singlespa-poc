import React from "react";
import { mountRootParcel } from "single-spa";
import Parcel from "single-spa-react/parcel";

export const Spa1Parcel = () => {
  return (
    <Parcel
      // @ts-ignore
      config={() => import("http://localhost:3001/src/index.ts")}
      mountParcel={mountRootParcel}
    />
  );
};

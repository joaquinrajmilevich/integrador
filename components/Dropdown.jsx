"use client";
import { useState } from "react";

const DropDown = ({ className, children }) => {
  const [selected, setSelected] = useState();

  return (
    <select className={className} name="select">
      {children}
    </select>
  );
};
export default DropDown;

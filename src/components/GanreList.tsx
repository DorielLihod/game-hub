import React from "react";
import useGanres from "../hooks/useGanres";

const GanreList = () => {
  const { ganres } = useGanres();

  return (
    <ul>
      {ganres.map((ganre) => (
        <li>{ganre.name}</li>
      ))}
    </ul>
  );
};

export default GanreList;

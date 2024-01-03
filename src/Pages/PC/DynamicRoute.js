import React from "react";
import { useParams } from "react-router-dom";

const DynamicRoute = () => {
  const { segments } = useParams();

  return (
    <div>
      <h1>Dynamic Route</h1>
      <p>Segments: {segments}</p>
    </div>
  );
};

export default DynamicRoute;

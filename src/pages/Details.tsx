import React from "react";
import { useParams } from "react-router-dom";

export const Details: React.FC = () => {
  const { name } = useParams();

  return <div>Details {name}</div>;
};

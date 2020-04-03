import React from "react";
import { Link } from "react-router-dom";

type Props = {
  id: number;
};

export const ProjectCard: React.FC<Props> = props => {
  const { id } = props;
  return (
    <div>
      <h2>A project</h2>
      <Link to={`/projects/${id}`}>Read more</Link>
    </div>
  );
};

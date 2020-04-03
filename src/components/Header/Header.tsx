import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </header>
  );
};

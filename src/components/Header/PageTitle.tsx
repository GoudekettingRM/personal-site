import React from "react";

type Props = {
  title: string;
};

export const PageTitle: React.FC<Props> = props => {
  return (
    <header>
      <h1 className="pageTitle">{props.title}</h1>
    </header>
  );
};

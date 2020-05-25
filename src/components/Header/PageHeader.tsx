import React from "react";

type Props = {
  title: string;
};

export const PageHeader: React.FC<Props> = (props) => {
  return (
    <div className="header">
      <header>
        <h1 className="pageTitle">{props.title}</h1>
      </header>
      <div className="headerSpacer"></div>
    </div>
  );
};

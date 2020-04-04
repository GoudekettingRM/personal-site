import React from "react";
import { PageTitle } from "./PageTitle";

type Props = {
  title: string;
};

export const PageHeader: React.FC<Props> = (props) => {
  return (
    <div className="header">
      <div>
        <PageTitle title={props.title} />
      </div>
      <div className="headerSpacer"></div>
    </div>
  );
};

import React from 'react';
import titleize from 'titleizejs';

import './PageHeader.scss';

type Props = {
  title: string;
};

export const PageHeader: React.FC<Props> = (props) => {
  return (
    <>
      <header className="header">
        <h1 className="pageTitle">{titleize(props.title)}</h1>
      </header>
      <div className="spacer"></div>
    </>
  );
};

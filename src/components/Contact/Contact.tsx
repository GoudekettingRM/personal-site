import React from "react";
import { ContactForm } from "./ContactSubComponents/ContactForm";
import { History } from "history";
import { PageHeader } from "../Header/PageHeader";

type Props = {
  history: History;
};

export const Contact: React.FC<Props> = (props) => {
  return (
    <div>
      <PageHeader title="Contact" />
      <ContactForm history={props.history} />
    </div>
  );
};

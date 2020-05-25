import React from "react";
import { RouteComponentProps } from "react-router";
import { ContactForm } from "./ContactSubComponents/ContactForm";
import { PageHeader } from "../Header/PageHeader";

interface Props extends RouteComponentProps {}

export const Contact: React.FC<Props> = (props) => {
  return (
    <div>
      <PageHeader title="Contact" />
      <h2>Get in touch!</h2>
      <ContactForm />
    </div>
  );
};

import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ContactForm } from './ContactSubComponents/ContactForm';
import { PageHeader } from '../Header/PageHeader';
import './contact.scss';

interface Props extends RouteComponentProps {}

export const Contact: React.FC<Props> = (props) => {
  return (
    <div>
      <PageHeader title="contact" />
      <div className="spacer"></div>
      <h2 className="contactTitle">Get in touch!</h2>
      <ContactForm />
    </div>
  );
};

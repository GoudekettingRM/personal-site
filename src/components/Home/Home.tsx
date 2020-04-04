import React from "react";
import { PageHeader } from "../Header/PageHeader";

export const Home: React.FC = () => {
  return (
    <div>
      <PageHeader title="Home" />
      <section>Showcase projects</section>
      <section>About me + download cv</section>
      <section>Get in touch</section>
    </div>
  );
};

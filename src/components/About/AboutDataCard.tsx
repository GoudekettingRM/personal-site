import React, { useState } from "react";
import { AboutItem } from "../../types/aboutItem";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

type Props = {
  data: AboutItem;
};

export const AboutDataCard: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const { title, description, image, moreInformationUrl } = props.data;

  const _toggleOpen = (): void => {
    setOpen(!open);
  };

  return (
    <Accordion>
      <Card className="aboutCard">
        <Card.Img
          variant="top"
          src={image}
          alt={`Me, ${title}`}
          style={{
            maxWidth: "100%",
            width: "auto",
            height: "auto",
          }}
        />
        <Card.Body>
          <Card.Title>
            <Accordion.Toggle
              as="a"
              variant="link"
              className="cardLink"
              style={{ cursor: "pointer" }}
              onClick={_toggleOpen}
              eventKey="0">
              {`< ${title} />`}
              <span className="underline-link"></span>
            </Accordion.Toggle>
          </Card.Title>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {description}
              <br />
              <br />
              {moreInformationUrl && (
                <a
                  className="cardLink inline-text"
                  href={moreInformationUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  {"< Read more />"}
                  <span className="underline-link"></span>
                </a>
              )}
            </Card.Body>
          </Accordion.Collapse>
        </Card.Body>
      </Card>
    </Accordion>
  );
};

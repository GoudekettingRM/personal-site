import React, { useState } from 'react';
import { AboutItem } from '../../types/aboutItem';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
        <LazyLoadImage
          src={image}
          alt={`Me, ${title}`}
          style={{
            maxWidth: '100%',
            width: 'auto',
            height: 'auto',
          }}
        />
        <Card.Body>
          <Card.Title>
            <Accordion.Toggle
              as="a"
              variant="link"
              className="cardLink"
              style={{ cursor: 'pointer' }}
              onClick={_toggleOpen}
              eventKey="0">
              {`< ${title} />`}
              <span className="underline-link"></span>
            </Accordion.Toggle>
          </Card.Title>
          <Accordion.Collapse eventKey="0">
            <Card.Text>
              {description}
              <br />
              <br />
              {moreInformationUrl && (
                <a
                  className="cardLink inline-text"
                  href={moreInformationUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  {'< Read more />'}
                  <span className="underline-link"></span>
                </a>
              )}
            </Card.Text>
          </Accordion.Collapse>
        </Card.Body>
      </Card>
    </Accordion>
  );
};

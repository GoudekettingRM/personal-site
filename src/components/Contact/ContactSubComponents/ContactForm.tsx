import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Recaptcha from 'react-recaptcha';
import { Loading } from '../../FramerMotionIcons/Loading';

type MessageDataType = {
  name: string;
  email: string;
  phone: string;
  message: string;
  'g-recaptcha-response': string;
};

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [gRecaptchaToken, setGRecaptchaToken] = useState('');
  const [readyForRecaptcha, setReadyForRecaptcha] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.setTimeout(() => setReadyForRecaptcha(true), 1000);
  }, []);

  const _verifyCallback = (response: string): void => {
    if (response) {
      setGRecaptchaToken(response);
    }
  };

  const _handleSubmit = async (event: FormEvent): Promise<void> => {
    if (gRecaptchaToken) {
      event.preventDefault();
      const messageData: MessageDataType = {
        name,
        email,
        phone,
        message,
        'g-recaptcha-response': gRecaptchaToken,
      };

      await setLoading(true);
      try {
        await emailjs.send(
          'default_service',
          'contact_request',
          messageData,
          'user_aEK6JuSDMeN6eXBJSHBN6',
        );
        setSuccess(true);
      } catch (error) {
        setError(true);
        console.error('Failed', error);
      }
      setLoading(false);
    } else {
      alert('You have to verify that you are human.');
      history.push('/contact');
      return;
    }
  };

  if (success) {
    setTimeout(() => history.push('/'), 2500);
    return (
      <>
        <div className="successMessage">
          <h2 className="contactTitle">Message sent!</h2>
          <p className="contactParagraph">
            Thank you. I will contact you as soon as possible!
          </p>
        </div>
      </>
    );
  }
  return (
    <>
      {loading && <Loading />}
      {error && (
        <div className="errorMessage">
          <p className="contactParagraph">There was an error...</p>
        </div>
      )}
      {!loading && !error && !success && (
        <Form onSubmit={_handleSubmit} className="contactForm customCard">
          <div className="inputField__container">
            <Form.Label htmlFor="name">Name</Form.Label>
            <FormControl
              placeholder="Name"
              aria-label="Name"
              name="name"
              as="input"
              type="text"
              className="inputField__text"
              value={name}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setName(event.target.value)
              }
            />
          </div>
          <div className="inputField__container">
            <Form.Label htmlFor="email">E-mail</Form.Label>
            <FormControl
              placeholder="E-mail"
              aria-label="E-mail"
              name="email"
              as="input"
              type="text"
              className="inputField__text"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
          </div>
          <div className="inputField__container">
            <Form.Label htmlFor="phone">Phone number</Form.Label>
            <FormControl
              placeholder="Phone number"
              aria-label="Phone number"
              name="phone"
              as="input"
              type="text"
              className="inputField__text"
              value={phone}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPhone(event.target.value)
              }
            />
          </div>
          <div className="inputField__container">
            <Form.Label htmlFor="message">Your message</Form.Label>
            <FormControl
              placeholder="Type your message"
              aria-label="Message"
              name="message"
              as="textarea"
              className="inputField__textarea"
              value={message}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(event.target.value)
              }
            />
          </div>
          {!readyForRecaptcha && <Loading color="navy" />}
          {readyForRecaptcha && (
            <div className="recaptchaContainer">
              <Recaptcha
                sitekey="6LcnvOYUAAAAAAdjNzd3gG6g8YvDEv8eupEpN5hP"
                render="explicit"
                verifyCallback={_verifyCallback}
              />
            </div>
          )}

          <Button variant="primary" type="submit" className="styledButton">
            Send
          </Button>
        </Form>
      )}
    </>
  );
};

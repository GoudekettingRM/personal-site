import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Recaptcha from "react-recaptcha";
import { Loading } from "../../FramerMotionIcons/Loading";
import "../contact.css";

type MessageDataType = {
  name: string;
  email: string;
  phone: string;
  message: string;
  "g-recaptcha-response": string;
};

export const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [gRecaptchaToken, setGRecaptchaToken] = useState("");
  const [readyForRecaptcha, setReadyForRecaptcha] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.setTimeout(() => setReadyForRecaptcha(true), 1000);
  }, []);

  const _handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    switch (event.target.name) {
      case "name": {
        setName(event.target.value);
        break;
      }
      case "email": {
        setEmail(event.target.value);
        break;
      }
      case "message": {
        setMessage(event.target.value);
        break;
      }
      case "phone": {
        setPhone(event.target.value);
        break;
      }
      default: {
        break;
      }
    }
  };

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
        "g-recaptcha-response": gRecaptchaToken,
      };

      await setLoading(true);
      try {
        await emailjs.send(
          "strato_webmail",
          "contact_request",
          messageData,
          "user_aEK6JuSDMeN6eXBJSHBN6"
        );
        setSuccess(true);
      } catch (error) {
        setError(true);
        console.error("Failed", error);
      }
      setLoading(false);
    } else {
      alert("You have to verify that you are human.");
      history.push("/contact");
      return;
    }
  };

  if (success) {
    // window.scrollTo(0, 0);
    setTimeout(() => history.push("/"), 2500);
    return (
      <div>
        <div className="successMessage">
          <h2>Message sent!</h2>
          <p>Thank you. I will contact you as soon as possible!</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      {loading && <Loading />}
      {error && (
        <div className="errorMessage">
          <p>There was an error...</p>
        </div>
      )}
      {!loading && !error && !success && (
        <div>
          <Form
            onSubmit={_handleSubmit}
            // action="?"
            // method="POST"
            className="form">
            <Form.Label htmlFor="name">Name</Form.Label>
            <FormControl
              placeholder="Name"
              aria-label="Name"
              name="name"
              as="input"
              type="text"
              value={name}
              onChange={_handleChange}
            />
            <Form.Label htmlFor="email">E-mail</Form.Label>
            <FormControl
              placeholder="E-mail"
              aria-label="E-mail"
              name="email"
              as="input"
              type="text"
              value={email}
              onChange={_handleChange}
            />
            <Form.Label htmlFor="phone">Phone number</Form.Label>
            <FormControl
              placeholder="Phone number"
              aria-label="Phone number"
              name="phone"
              as="input"
              type="text"
              value={phone}
              onChange={_handleChange}
            />
            <Form.Label htmlFor="message">Your message</Form.Label>
            <FormControl
              placeholder="Type your message"
              aria-label="Message"
              name="message"
              as="textarea"
              value={message}
              onChange={_handleChange}
            />
            {!readyForRecaptcha && <Loading />}
            {readyForRecaptcha && (
              <Recaptcha
                sitekey="6LcnvOYUAAAAAAdjNzd3gG6g8YvDEv8eupEpN5hP"
                render="explicit"
                verifyCallback={_verifyCallback}
              />
            )}

            <Button variant="primary" type="submit" className="button">
              Send
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

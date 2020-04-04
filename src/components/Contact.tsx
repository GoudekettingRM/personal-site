import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PageHeader } from "./Header/PageHeader";
import { Loading } from "./FramerMotionIcons/Loading";

type MessageDataType = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const _handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    const messageData: MessageDataType = { name, email, phone, message };

    await setLoading(true);
    try {
      await emailjs.send(
        "strato_webmail",
        "contact_request",
        messageData,
        "user_aEK6JuSDMeN6eXBJSHBN6"
      );
      // console.log("Success", response.status, response.text);
      setSuccess(true);
    } catch (error) {
      setError(true);
      console.error("Failed", error);
    }
    setLoading(false);
  };

  const _resetForm = (): void => {
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  };
  return (
    <div>
      <PageHeader title="Contact" />
      <h2>Get in touch!</h2>
      {loading && <Loading />}
      {success && <div>Message sent!</div>}
      {error && <div>There was an error...</div>}
      {!loading && !error && !success && (
        <div>
          <Form
            onSubmit={_handleSubmit}
            action="?"
            method="POST"
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

            <Button variant="primary" type="submit" className="button">
              Send
            </Button>
            <Button
              variant="outline-dark"
              type="button"
              className="button"
              onClick={_resetForm}>
              Reset Form
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

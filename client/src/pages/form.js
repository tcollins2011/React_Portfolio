import React from "react";
import "./form.css";
import NavBar from "../components/Nav";
import { useForm } from "react-hook-form";
import API from "../utils/API";

function FormPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    API.sendEmail(data)
      .then(console.log("done"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="page">
      <NavBar></NavBar>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form"
        // method="POST"
        // action="/api/nodeMail"
      >
        <div className="form-field">
          <label htmlFor="name">
            <div className="label-content">Name:</div>
            <input
              type="text"
              name="name"
              ref={register({ required: true })}
              required
            />
          </label>
        </div>

        <div className="form-field">
          <label htmlFor="email">
            <div className="label-content">Email:</div>
            <input
              type="email"
              name="email"
              ref={register({ required: true })}
              required
            />
          </label>
        </div>

        <div className="form-field">
          <label htmlFor="message">
            <div className="label-content">Message:</div>
            <textarea
              className="stretch"
              name="message"
              rows="5"
              ref={register({ required: true })}
              required
            />
          </label>
        </div>

        <button type="submit">Send</button>

        <div>
          {window.location.hash === "#success" && (
            <div id="success">
              <p>Your message has been sent!</p>
            </div>
          )}
          {window.location.hash === "#error" && (
            <div id="error">
              <p>An error occured while submitting the form.</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormPage;

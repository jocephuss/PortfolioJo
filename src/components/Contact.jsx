import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  // this is the Contact component that renders the contact page
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // handle form input change
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    // handle form submission
    e.preventDefault();
    if (validateForm()) {
      // validate form before sending email
      sendEmail();
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const sendEmail = () => {
    // send email using emailjs
    emailjs
      .send(
        "service_3kdh2jf",
        "template_jof8bva",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "_UP4bqjHbOkJT2dsn"
      )
      .then(
        (response) => {
          // display success message after email is sent
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("There was an error sending your message."); // display error message
        }
      );
  };

  const validateForm = () => {
    // validate form inputs and display error messages if necessary
    let isValid = true;
    let errors = {};

    if (!formData.name.trim()) {
      // validate name field
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      // validate email field
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      // validate email format using regex
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      // validate message field
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid; // return true if form is valid, false otherwise
  };

  return (
    // JSX for Contact component below, styled with CSS in App.css
    <div className="contactme">
      <h2>Contact me via Email</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </label>
        <label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

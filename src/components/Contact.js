// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="contact">
      <img src={props?.data?.photo} className="img-contact" alt="contact" />
      <div className="contact-info">
        <h2>{props?.data?.name}</h2>
        <p>{props?.data?.phone}</p>
        <p>{props?.data?.email}</p>
      </div>
    </div>
  );
};

export default Contact;

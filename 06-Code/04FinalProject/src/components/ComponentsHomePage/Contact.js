import React from "react";
import TextField from "@mui/material/TextField/TextField";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="title">
        <h2 className="titleText">
          <span>E</span>SCRÍBENOS
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="contactForm">
        <h3>Enviar Mensaje</h3>

        <TextField
          label="Name"
          color="secondary"
          fullWidth
          style={{ margin: "10px 0" }}
        />
        <TextField
          label="Email"
          color="secondary"
          fullWidth
          style={{ margin: "10px 0" }}
        />

        <div className="inputBox">
          <textarea name="Name"></textarea>
        </div>
        <div className="inputBox">
          <input type="submit" className="btn" value="Enviar" />
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React from "react";

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
        <div className="inputBox">
          <input type="text" placeholder="Name" />
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Email" />
        </div>
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

import React from "react";
import img1 from "../../img/bg/img1.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="row">
        <div className="col50">
          <h2 className="titleText">
            <span>U</span>NA VARIEDAD DE SABORES <br /> PARA LOS PALADARES MAS
            EXIGENTES.
          </h2>
          <p>
            Al igual que una panadería perfectamente horneada, creamos Panadería
            con un amor especial, y se nota. Lorem ipsum dolor sit, amet
            consectetur adipisicing, elit. Nulla harum sunt dolorem officiis est
            dicta facilis enim velit atque eligendi? Nemo, laborum tempore alias
            quo magnam, illum veritatis quia iusto? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magnam, esse. Natus dolorum esse
            numquam adipisci laudantium, totam possimus, amet veritatis! Quas
            deserunt quibusdam quis quidem accusantium incidunt reiciendis
            maiores corrupti? <br />
            <br /> Lorem ipsum dolor sit, amet, consectetur adipisicing elit.
            Exercitationem, nulla et dolorem veritatis aliquam explicabo saepe
            est hic voluptas maxime qui sunt temporibus voluptates reiciendis
            quibusdam quidem maiores, inventore blanditiis! Lorem ipsum dolor
            sit amet consectetur adipisicing, elit. Quasi, blanditiis, dolore.
            Repellendus expedita, dolore est debitis, maiores dolorum modi
            animi, iure itaque natus nemo perspiciatis. Dignissimos ipsum
            possimus repudiandae quis!
          </p>
        </div>
        <div className="col50">
          <div className="imgBx">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import ButtonOption from "../ComponentButton/ButtonOption";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="content left">
        <h2>Disfruta De Los Mejores Postres</h2>
        <p>
          Te invitamos a degustar productos del horno a tu mesa, con los más
          altos estándares de calidad y precios accesibles a nuestra comunidad,
          contamos con alta de experiencia en el mercado, apoyando el desarrollo
          de la industria.
        </p>

        <ButtonOption
          href="/products"
          className="btn"
          text="Nuestros Productos"
        />
      </div>
      <div className="content right"></div>
    </section>
  );
}

export default Banner;

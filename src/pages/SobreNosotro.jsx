import React from "react";
import '../style/SobreNosotros.css'

function SobreNosotro() {
  return (
    <div className="contenedor ">
      <h2 className="contenedor_titulo text-center">Sobre Nosotros</h2>
      <p className="contenedor_texto">
        En SaborEx, creemos que la mejor experiencia culinaria comienza con una
        buena recomendación. Nuestra pasión por la gastronomía y el deseo de
        ayudar a las personas a encontrar los mejores lugares para comer nos
        impulsó a crear esta plataforma.
      </p>
      <p className="contenedor_texto">Sabemos que cada comida cuenta, ya sea
        una cena gourmet en un restaurante con estrellas Michelin o un plato
        sencillo en el bar de la esquina. Por eso, trabajamos día a día para
        ofrecerte reseñas honestas, detalladas y útiles de una comunidad de
        verdaderos amantes de la comida.
      </p>
      <p className="contenedor_texto"> 
        Nuestro equipo se dedica a asegurarse
        de que puedas confiar en cada opinión que encuentres aquí. Queremos que
        descubras nuevos sabores, disfrutes de experiencias auténticas y tomes
        decisiones informadas cada vez que decidas dónde comer.
      </p>
      <p className="contenedor_texto">
        Ya sea que estés
        buscando la próxima joya oculta o quieras compartir tu opinión sobre tu
        restaurante favorito, estamos aquí para ayudarte a explorar el mundo
        culinario a tu manera.
      </p>
      <br />
      <p className="contenedor_texto text-center  contenedor_texto--resalte ">
        ¡Únete a nuestra comunidad y empieza a descubrir
        las mejores experiencias gastronómicas cerca de ti!
      </p>
    </div>
  );
}

export default SobreNosotro;

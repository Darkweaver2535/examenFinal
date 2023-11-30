import React from "react";
import Boton from "../styles/Button.css";

function Button() {
  return (
    <section className="recuadro">
      <div className="flex">
        <div>
          <img src="image.png" alt="imagen 1" className="imagen1" />
        </div>
        <div>
          <h2 className="letra1">Puxada frontal</h2>
          <h3 className="letra2">3 séries x 12 repetições</h3>
        </div>
        <div>
          <img src="Icons.svg" alt="" className="imagen2" />
        </div>
      </div>

      <div className="flex">
        <div>
          <img src="image-2.png" alt="imagen 1" className="imagen1" />
        </div>
        <div>
          <h2 className="letra1">Remada curvada</h2>
          <h3 className="letra2">3 séries x 12 repetições</h3>
        </div>
        <div>
          <img src="Icons.svg" alt="" className="imagen2" />
        </div>
      </div>

      <div className="flex">
        <div>
          <img src="image-3.png" alt="imagen 1" className="imagen1" />
        </div>
        <div>
          <h2 className="letra1">Remada unilateral</h2>
          <h3 className="letra2">3 séries x 12 repetições</h3>
        </div>
        <div>
          <img src="Icons.svg" alt="" className="imagen2" />
        </div>
      </div>

      <div className="flex">
        <div>
          <img src="image-4.png" alt="imagen 1" className="imagen1" />
        </div>
        <div>
          <h2 className="letra1">Levantamento terra</h2>
          <h3 className="letra2">3 séries x 12 repetições</h3>
        </div>
        <div>
          <img src="Icons.svg" alt="" className="imagen2" />
        </div>
      </div>
    </section>
  );
}

export default Button;

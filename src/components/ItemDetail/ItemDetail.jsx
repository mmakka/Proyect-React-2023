import React from "react";

export default function ItemDetail() {
    return(
  <div className="card" style={{ width: "18rem" }}>
    <img className="card-img-top" src="https://http2.mlstatic.com/D_NQ_NP_815769-MLA52764476432_122022-O.webp" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Juego de toallones</h5>
      <h6>Precio : $1200</h6>
      <p>SKU : 1234</p>
      <p className="card-text">Juego de toallones 10 un</p>
      <a href="#" className="btn btn-primary">
        Comprar
      </a>
    </div>
  </div>
    );
}
import "../../../src/styles/index.css";
import "./renderProperties.css";

function RenderProperties() {
  return (
    <div className="container" id="properties">
      <h1>Propiedades agregadas recientemente</h1>
      <div className="card" style={{ width: "16rem" }}>
        <div className="container" id="white-header">
          <div className="white-header-data">
            <div className="profile-pic"></div>
            <div className="persona">
              <h5>Persona</h5>
              <h6>Agente</h6>
            </div>
            <i
              className="fa-solid fa-ellipsis-vertical"
              style={{ color: "#1D1B20" }}
              id="options"
            ></i>
          </div>
        </div>
        <img src="img\Background.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{"Card title"}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div id="buttons">
            <a href="#" className="btn btn-primary detalles">
              Detalles
            </a>
            <a href="#" className="btn btn-primary">
              Ofertar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RenderProperties;

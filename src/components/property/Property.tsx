import "../../../src/styles/index.css";
import SideMenu from "../../components/sideMenu/SideMenu";
import "./Property.css";

function Property() {
  // <- Aquí va in {id}
  return (
    <>
      <SideMenu />
      <div className="property-container">
        <div className="row">
          <h1>Detalles del inmueble</h1>
          <div className="info-container">
            <h3>Subido por</h3>
            <div className="agente">
              <div className="profile-pic"></div>
              <div className="persona">
                <h5>José Alfredo Cantú</h5>
                <h6>1 Abril de 2021</h6>
              </div>
            </div>
            <div className="details">
              <div className="row">
                <div className="col">Tipo inmueble</div>
                <div className="col">Dirección</div>
                <div className="col">Precio inmueble</div>
                <div className="col">Superficie</div>
                <div className="col">Construcción</div>
                <div className="col">Estado de venta</div>
              </div>
              <div className="row d-flex highlighted">
                <div className="col">Departamento</div>
                <div className="col">44A x 11, No. 441, Cinco Colonias</div>
                <div className="col">$4,455,100</div>
                <div className="col">455 m2</div>
                <div className="col">2010</div>
                <div className="col">Consideración</div>
              </div>
            </div>
            <div className="description">
              <h1>Descripción</h1>
              <p>
                Esta espaciosa casa, ubicada en una de las áreas más pintorescas
                de Cinco Colonias, es una oportunidad única. Con 5 habitaciones
                distribuidas en 5 plantas, ofrece un amplio espacio para toda la
                familia. La propiedad se encuentra amueblada y cuenta con un
                diseño contemporáneo que combina a la perfección con los
                detalles tradicionales. Los baños y la cocina están totalmente
                equipados, y un balcón privado agrega un toque de encanto al
                lugar. Además, la propiedad cuenta con un garaje para la
                comodidad de sus residentes.
              </p>
            </div>
            <div className="secondary">
              <h1>Datos secundarios</h1>
              <ul>
                <li className="secondary-item">CP: 28752</li>
                <li className="secondary-item">Habitaciones: 5</li>
                <li className="secondary-item">Número de Plantas: 5</li>
                <li className="secondary-item">Amueblado: Sí</li>
                <li className="secondary-item">Baños: Sí</li>
                <li className="secondary-item">Piscina: No</li>
                <li className="secondary-item">Balcón: Sí</li>
                <li className="secondary-item">Cocina: Sí</li>
                <li className="secondary-item">Garaje: Sí</li>
              </ul>
            </div>
          </div>
          <div className="col image-layout">
            <div className="row full-width">
              <img src="img\frente.jpg" alt="frente" />
            </div>
            <div className="row half-width-row">
              <div className="half-width">
                <img src="img\sala.jpg" alt="sala" />
              </div>
              <div className="half-width">
                <img src="img\recámara.jpg" alt="recámara" />
              </div>
            </div>
            <div className="row full-width">
              <img src="img\terraza.jpg" alt="terraza" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Property;

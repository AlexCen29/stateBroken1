import "../../../src/styles/index.css";
import "./TarjetaInfoPerfil.css";
import avatarImage from "/img/Avatar1.jpg";

function TarjetaInfoPerfil() {
  return (
    <div className="container infoBase">
      <div className="container encabezado">
        <img src={avatarImage} alt="Profile" />
        <div>
          <h2>Emanuel Alfredo Espadas Jimenez</h2>
          <span>Agente inmobiliario</span>
          <span>EmanuelBebesote69@hotmail.com</span>
        </div>
      </div>
      <div className="container cuerpo">
        <div className="container descripcion">
          <p>
            <strong>CURP</strong>
          </p>
          <p>
            <strong>Dirección</strong>
          </p>
          <strong>
            <p>Fecha de nacimiento</p>
          </strong>
          <strong>
            <p>Sexo</p>
          </strong>
        </div>
        <div className="container data">
          <p>EAJJ861102HNLRMN06</p>
          <p>Calle 47B, No. 456, entre 56 y 58, Santa Rosa</p>
          <p>2/11/1986</p>
          <p>Masculino</p>
        </div>
      </div>
    </div>
  );
}

export default TarjetaInfoPerfil;

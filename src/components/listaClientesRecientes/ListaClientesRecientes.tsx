import "./ListaClientesRecientes.css";
import "../../../src/styles/index.css";

function ListaClientesRecientes() {
  return (
    <>
      <div className="container" id="clients">
        <h1>Clientes agregados recientemente</h1>
        <div className="principal">
          <div className="item">
            <div className="name">Reynaldo Avilés Coronado</div>
            <div className="broker">
              <div className="picture">J</div>
              <div className="agent-name">Javier Rejón Gómez</div>
            </div>
            <div className="agent-label">~Agente</div>
          </div>
          <div className="item">
            <div className="name">Laura Patricia González Ríos</div>
            <div className="broker">
              <div className="picture">J</div>
              <div className="agent-name">Javier Rejón Gómez</div>
            </div>
            <div className="agent-label">~Agente</div>
          </div>
          <div className="item"></div>
        </div>
      </div>
    </>
  );
}
export default ListaClientesRecientes;

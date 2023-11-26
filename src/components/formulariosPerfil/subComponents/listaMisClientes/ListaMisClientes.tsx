import "./ListaMisClientes.css";
import "../../../../../src/styles/index.css";

function ListaMisClientes() {
  return (
    <>
      <div id="clients">
        <table className="miTabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Agente</th>
              <th>Teléfono</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan Pérez</td>
              <td>María Gómez</td>
              <td>55443322</td>
              <td>juan@mail.com</td>
            </tr>
            <tr>
              <td>Laura González</td>
              <td>Pedro Fuentes</td>
              <td>55668899</td>
              <td>laura@mail.com</td>
            </tr>
            <tr>
              <td>Laura González</td>
              <td>Pedro Fuentes</td>
              <td>55668899</td>
              <td>laura@mail.com</td>
            </tr>
            <tr>
              <td>Laura González</td>
              <td>Pedro Fuentes</td>
              <td>55668899</td>
              <td>laura@mail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListaMisClientes;

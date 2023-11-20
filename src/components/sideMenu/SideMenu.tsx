import "../../../src/styles/index.css";
function SideMenu() {
  return (
    <div id="sideMenu">
      <div className="list-group">       
        <a href="./helados" className="list-group-item list-group-item-action">
          Procesos de venta
        </a>
        <a href="./helados" className="list-group-item list-group-item-action">
          Propiedades
        </a>
        <a href="./helados" className="list-group-item list-group-item-action">
          Llamadas
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Calendario
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Clientes
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Heramientas
        </a>
      </div>
      <button className="btn btn-danger">Peligro</button>
    </div>
  );
}
export default SideMenu;

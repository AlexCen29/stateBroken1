import "../../../src/styles/index.css";
import "./SideMenu.css";

function SideMenu() {
  return (
    <>
      <header>
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              {/* Elementos antes de "Expanded menu" */}
              <li className="list-group-item py-1">
                <a href="" className="text-reset">
                  <span>Procesos de venta</span>
                </a>
              </li>
              <li className="list-group-item py-1">
                <a href="" className="text-reset">
                  <span>Propiedades</span>
                </a>
              </li>
              <li className="list-group-item py-1">
                <a href="" className="text-reset">
                  <span>Llamadas</span>
                </a>
              </li>
              <li className="list-group-item py-1">
                <a href="" className="text-reset">
                  <span>Calendario</span>
                </a>
              </li>
              <li className="list-group-item py-1">
                <a href="" className="text-reset">
                  <span>Clientes</span>
                </a>
              </li>
              <li className="list-group-item py-1">
                <a href="" className="text-reset">
                  <span>Herramientas</span>
                </a>
              </li>
                <li className="list-group-item py-1">
                  <div className="btn-group dropend">
                    <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropend
                    </button>
                    <ul className="dropdown-menu">
                      <li>Ver todas</li>
                      <li>Dar propiedad de alta</li>
                    </ul>
                  </div>
                </li>
            </div>
          </div>
        </nav>

        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          <div className="container-fluid" id="upper-bar">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <a className="navbar-brand" id="logo" href="#">
              <img
                src="img\CasitaLogo.png"
                height="50"
                alt="Estate Broker"
                loading="lazy"
              />
            </a>

            <ul className="navbar-nav ms-auto d-flex flex-row" id="icons-nav">
              <a href="#">
                <i
                  className="fa-solid fa-circle-half-stroke"
                  id="icon"
                  style={{ color: "#1D1B20" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa-solid fa-magnifying-glass"
                  id="icon"
                  style={{ color: "#1D1B20" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa-solid fa-gear"
                  id="icon"
                  style={{ color: "#1D1B20" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa-regular fa-bell"
                  id="icon"
                  style={{ color: "#1D1B20" }}
                ></i>
              </a>
            </ul>
          </div>
        </nav>
      </header>
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4"></div>
      </main>
    </>
  );
}
export default SideMenu;

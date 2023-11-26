import React, { useState } from "react";
import "../../../src/styles/index.css";
import "./FormulariosPerfil.css";
import ListaMisClientes from "./subComponents/listaMisClientes/ListaMisClientes";
import MisPropiedades from "./subComponents/misPropiedades/MisPropiedades";
import MisProcesosVenta from "./subComponents/misProcesosVenta/MisProcesosVenta";
import FormClientes from "./subComponents/formClientes/FormClientes";
import FormPropiedades from "./subComponents/formPropiedades/FormPropiedades";

function FormulariosPerfil() {
  const [mostrarFormulario, setMostrarFormulario] = useState(null);

  const mostrarFormularioHandler = (formulario) => {
    setMostrarFormulario(formulario === mostrarFormulario ? null : formulario);
  };

  return (
    <div className="miTab">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#contenido1"
          >
            Clientes
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#contenido2">
            Propiedades
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#contenido3">
            Procesos de venta
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane container active" id="contenido1">
          {mostrarFormulario === "clientes" ? (
            <>
              <FormClientes />
              <footer>
                <button
                  className="miBoton"
                  onClick={() => mostrarFormularioHandler(null)}
                >
                  Cerrar
                </button>
              </footer>
            </>
          ) : (
            <>
              <ListaMisClientes />
              <footer>
                <button
                  className="miBoton"
                  onClick={() => mostrarFormularioHandler("clientes")}
                >
                  +
                </button>
              </footer>
            </>
          )}
        </div>
        <div className="tab-pane fade misCartas" id="contenido2">
          {mostrarFormulario === "propiedades" ? (
            <>
              <FormPropiedades />
              <footer>
                <button
                  className="miBoton"
                  onClick={() => mostrarFormularioHandler(null)}
                >
                  Cerrar
                </button>
              </footer>
            </>
          ) : (
            <>
              <MisPropiedades />
              <footer>
                <button
                  className="miBoton"
                  onClick={() => mostrarFormularioHandler("propiedades")}
                >
                  +
                </button>
              </footer>
            </>
          )}
        </div>
        <div className="tab-pane container fade" id="contenido3">
          {mostrarFormulario === "procesosVenta" ? (
            <>
              <h1>Formulario de Procesos de Venta</h1>
              <footer>
                <button
                  className="miBoton"
                  onClick={() => mostrarFormularioHandler(null)}
                >
                  Cerrar
                </button>
              </footer>
            </>
          ) : (
            <>
              <MisProcesosVenta />
              <footer>
                <button
                  className="miBoton"
                  onClick={() => mostrarFormularioHandler("procesosVenta")}
                >
                  +
                </button>
              </footer>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormulariosPerfil;

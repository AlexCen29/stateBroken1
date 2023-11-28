import React, { useState } from 'react';
import '../../../src/styles/index.css';
import './EventosProximos.css';

function EventosProximos() {
  const [eventos, setEventos] = useState([
    "Agendar reunión con el cliente",
    "Revisar el inventario de propiedades",
    "Pedir vacaciones para el periodo de Diciembre"
  ]);
  const [eliminacionExitosa, setEliminacionExitosa] = useState<boolean>(false);

  const handleEliminarEvento = (eventoIndex: number) => {

    const updatedEventos = eventos.filter((_, index) => index !== eventoIndex);
    setEventos(updatedEventos);
    setEliminacionExitosa(true);
    setTimeout(() => {
      setEliminacionExitosa(false);
    }, 3000);
  };

  return (
    <div className="" id="events">
      {eliminacionExitosa && (
        <div className="modal fade show" tabIndex={-1} style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <h5 className="modal-title">El evento se eliminó correctamente</h5>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => setEliminacionExitosa(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="card" id="events-card">
        <div className="card-header">
          <div className="title">
            <h1>Próximos eventos</h1>
          </div>
        </div>
        <div className="card-body">
          {eventos.map((evento, index) => (
            <div className="event-row" key={index}>
              <p>{evento}</p>
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => handleEliminarEvento(index)}
              />
            </div>
          ))}
        </div>
        <div className="card-footer">
          <div id="buttons">
            <a href="#" className="btn btn-primary ">
              Ocultar
            </a>
            <a href="#" className="btn btn-primary" id="calendar-btn">
              Ver en calendario
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventosProximos;
import "../../../src/styles/index.css";
import "./EventosProximos.css";

function EventosProximos() {
    return (
        <div className="" id="events">
            <div className="card" id="events-card">
                <div className="card-header">
                    <div className="title">Próximos eventos</div>
                </div>
                <div className="card-body">
                    <div className="event-row">
                        <p>Agendar reunión con el cliente</p>
                        <input type="checkbox" className="checkbox" id="ocultarCheckbox" />
                    </div>
                    <div className="event-row">
                        <p>Revisar el inventario de propiedades</p>
                        <input type="checkbox" className="checkbox" id="ocultarCheckbox" />
                    </div>
                    <div className="event-row">
                        <p>Pedir vacaciones para el periodo de Diciembre</p>
                        <input type="checkbox" className="checkbox" id="ocultarCheckbox" />
                    </div>
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

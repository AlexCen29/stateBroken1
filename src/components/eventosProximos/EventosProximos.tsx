import "../../../src/styles/index.css";
import "./EventosProximos.css";

function EventosProximos() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <div className="title">Próximos eventos</div>
                </div>
                <div className="card-body">
                    <div className="event-row">
                        <p>Invadir Palestina!!</p>
                        <input type="checkbox" id="ocultarCheckbox" />
                    </div>
                    <div className="event-row">
                        <p>Comprar mas jabon</p>
                        <input type="checkbox" id="ocultarCheckbox" />
                    </div>
                </div>
                <div className="card-footer">
                    <div id="buttons">
                        <a href="#" className="btn btn-primary miboton1">
                            Ocultar
                        </a>
                        <a href="#" className="btn btn-primary miboton1">
                            Ver en calendario
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventosProximos;

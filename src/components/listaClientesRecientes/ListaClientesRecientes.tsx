import "../../../src/styles/index.css";
import "./ListaClientesRecientes.css";

function ListaClientesRecientes() {

    return (
        
        <div className="container principal">
            <h1>Clientes agregados recientemente</h1>

            <div className="header">
                <div className="header-stretch"></div>

                <div className="header-content">
                    <div className="name">
                        Reynaldo Avilés Coronado
                    </div>

                    <div className="initial">
                        J
                    </div>

                    <div className="agent-name">
                        Javier Rejón Gómez
                    </div>

                    <div className="agent-label">
                        ~Agente
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="name">
                    Laura Patricia González Ríos
                </div>

                <div className="initial">
                    J
                </div>

                <div className="agent-name">
                    Javier Rejón Gómez
                </div>

                <div className="agent-label">
                    ~Agente
                </div>
            </div>

            <div className="item">
            </div>
        </div>
    );

}

export default ListaClientesRecientes;
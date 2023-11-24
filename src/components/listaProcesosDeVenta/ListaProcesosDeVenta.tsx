import "./ListaProcesosDeVenta.css";
import "../../../src/styles/index.css";

function ListaProcesosDeVenta() {
    return (
        <>
            <div className="container">
                <h1>Procesos de venta</h1>
                <div className="principal">
                    <div className="item">
                        <div className="icono-nombre">
                            <div className="circle">J</div>
                            <div className="name">
                                Javier Rejón Gómez
                            </div>
                        </div>
                        <div className="property-type">
                            Departamento
                        </div>
                        <div className="client-name">
                            Reynaldo Avilés Coronado
                        </div>
                        <div className="phone">
                            55 1234 5678
                        </div>
                        <div className="price">
                            $22,500,000
                        </div>
                        <div className="sale-status">
                            Interés
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <div className="icono-nombre">
                                <div className="circle">A</div>
                                <div className="name">
                                    Alex Gómez
                                </div>
                            </div>
                        </div>
                        <div className="property-type">
                            Departamento
                        </div>
                        <div className="client-name">
                            Reynaldés Coronado
                        </div>
                        <div className="phone">
                            55 1234 5678
                        </div>
                        <div className="price">
                            $22,500,000
                        </div>
                        <div className="sale-status">
                            Interés
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ListaProcesosDeVenta;

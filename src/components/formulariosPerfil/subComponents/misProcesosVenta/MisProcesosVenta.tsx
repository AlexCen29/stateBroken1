import "./MisProcesosVenta.css";
import "../../../../../src/styles/index.css";

function MisProcesosVenta() {
    return (
        <>
            <div id="clients">
                <table className="miTabla">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Cliente</th>
                            <th>Número</th>
                            <th>Precio</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Departamento</td>
                            <td>Reynaldo Avilés Coronado</td>
                            <td>9995035488</td>
                            <td>48811215</td>
                            <td>Interes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MisProcesosVenta;

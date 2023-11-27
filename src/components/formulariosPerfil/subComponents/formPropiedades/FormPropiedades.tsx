import "../../../../../src/styles/index.css";
import "./FormPropiedades.css";
import FormCasa from "./subComponents/formCasa/FormCasa";
import FormDepartamento from "./subComponents/formDepartameto/FormDepartamento";
import FormTerreno from "./subComponents/formTerreno/FormTerreno";
function FormPropiedades() {
    return (
        <div className="mt-5 miTab2">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#contenido11">
                        Casa
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#contenido22">
                        Departamento
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#contenido33">
                        Terreno
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane container active" id="contenido11">
                <FormCasa />
                </div>
                <div className="tab-pane fade misCartas" id="contenido22">
                <FormDepartamento />
                </div>
                <div className="tab-pane container fade" id="contenido33">
                <FormTerreno />
                </div>
            </div>
        </div>
    );
}

export default FormPropiedades;

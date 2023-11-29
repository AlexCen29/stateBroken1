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
                        Inmueble
                    </a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#contenido22">
                        Departamento
                    </a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#contenido33">
                        Terreno
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane container active" id="contenido11">
                    <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" checked />
                    <label className="btn btn-secondary" htmlFor="option1">Casa</label>

                    <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
                    <label className="btn btn-secondary" htmlFor="option2">Departamento</label>
                    <div className="formCasa">
                        <FormCasa />
                    </div>
                    <div className="formDepartamento">
                    <FormDepartamento />
                    </div>
                </div>
                {/* <div className="tab-pane fade misCartas" id="contenido22">
                <FormDepartamento />
                </div> */}
                <div className="tab-pane container fade" id="contenido33">
                    <FormTerreno />
                </div>
            </div>
        </div>
    );
}

export default FormPropiedades;

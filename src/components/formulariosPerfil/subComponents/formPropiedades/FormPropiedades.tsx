import "../../../../../src/styles/index.css";
import "./FormPropiedades.css";
import Desplegable from "./subComponents/desplegable/Desplegable";
// import FormCasa from "./subComponents/formCasa/FormCasa";
// import FormDepartamento from "./subComponents/formDepartameto/FormDepartamento";
import FormTerreno from "./subComponents/formTerreno/FormTerreno";
function FormPropiedades() {
    return (
        <div className="mt-5 miTab2">
            <div className="tab-content">
                <div className="tab-pane container active" id="contenido11">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Inmueble</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Terreno</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <Desplegable />
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="formDepartamento">
                                <FormTerreno />
                            </div>
                        </div>
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

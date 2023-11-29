import React, { useState } from 'react';
import "./Desplegable.css";
import "../../../../../../../src/styles/index.css";
import FormCasa from '../formCasa/FormCasa';
import FormDepartamento from '../formDepartameto/FormDepartamento';

function Desplegable() {
    const [selectedForm, setSelectedForm] = useState('');

    const handleFormSelection = (formName: string) => {
        setSelectedForm(formName);
    };

    return (
        <div>
            <ul className="">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Tipos de inmueble</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={() => handleFormSelection('casa')}>Casa</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => handleFormSelection('departamento')}>Departamento</a></li>
                    </ul>
                </li>
            </ul>

            {selectedForm === 'casa' && <FormCasa />}
            {selectedForm === 'departamento' && <FormDepartamento />}
        </div>
    );
}

export default Desplegable;

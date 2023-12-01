import React, { useState } from 'react';
import "./FormProcesoVenta.css";
import '../../../../../src/styles/index.css';

function FormProcesoVenta() {

    return (
        <div>
            <form className='miFormCliente' >
                <label htmlFor="opcion1">Cliente:</label>
                <input
                    list="opciones1"
                    id="opcion1"
                    name="opcion1"

                />

                <datalist id="opciones1">
                    <option value="Opción 1-1" />
                    <option value="Opción 1-2" />
                    <option value="Opción 1-3" />
                </datalist>

                <br />

                <label htmlFor="opcion2">Propiedad:</label>
                <input
                    list="opciones2"
                    id="opcion2"
                    name="opcion2"

                />

                <datalist id="opciones2">
                    <option value="Opción 2-1" />
                    <option value="Opción 2-2" />
                    <option value="Opción 2-3" />
                </datalist>

                <br />

                <button className='miBotonCliente' type="submit">Crear</button>
            </form>
        </div>
    );
}

export default FormProcesoVenta;

import React from 'react';
import "./FormClientes.css";
import "../../../../../src/styles/index.css";

function FormClientes() {
    return (
        <div>
            <form className='miFormCliente' action="/submit" method="post" >
            <h1 >Nuevo cliente</h1>
                <div className='miNombre'>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className='grupo1'>
                    <div>
                        <label htmlFor="email">Telefono</label>
                        <input type="number" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                        <input type="date" id="fechaNacimiento" name="fechaNacimiento" required />
                    </div>
                </div>
                <div className='miCorreo'>
                    <label htmlFor="correo">correo electronico</label>
                    <input type="email" id="correo" name="correo" required />
                </div>
                <button className='miBotonCliente' type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FormClientes;

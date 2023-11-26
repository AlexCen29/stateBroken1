import React from 'react';
import "./FormCasa.css";
import "../../../../../../../src/styles/index.css";

function FormCasa() {
    return (
        <div>
            <form className='miFormCasa' action="/submit" method="post" >
            <h1 >Nuevo cliente</h1>
                <div className='miDireccionCasa'>
                    <label htmlFor="direccionCasa">Direccion</label>
                    <input type="text" id="direccionCasa" name="direccionCasa" required />
                </div>
                <div className='grupoCasa1'>
                    <div>
                        <label htmlFor="email">Precio</label>
                        <input type="number" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="anioConstruccionCasa">Año construccion</label>
                        <input type="number" id="anioConstruccionCasa" name="anioConstruccionCasa" required />
                    </div>
                    <div>
                        <label htmlFor="anioConstruccionCasa">Metros cuadrados</label>
                        <input type="number" id="anioConstruccionCasa" name="anioConstruccionCasa" required />
                    </div>
                </div>
                <div className='miCorreo'>
                    <label htmlFor="correo">correo electronico</label>
                    <input type="email" id="correo" name="correo" required />
                </div>
                <button className='miBotonCasa' type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FormCasa;

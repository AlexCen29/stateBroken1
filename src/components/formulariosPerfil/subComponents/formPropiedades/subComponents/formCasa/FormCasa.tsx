import React from 'react';
import "./FormCasa.css";
import "../../../../../../../src/styles/index.css";

function FormCasa() {
    return (
        <div>
            <form className='miFormCasa' action="/submit" method="post" >
                <h1 >Nueva casa</h1>
                <div className='miDireccionCasa'>
                    <label htmlFor="direccionCasa">Direccion</label>
                    <input type="text" id="direccionCasa" name="direccionCasa" required />
                </div>
                <div className='grupoCasa1'>
                    <div>
                        <label htmlFor="precioCasa">Precio</label>
                        <input type="number" id="precioCasa" name="precioCasa" required />
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
                <div className='miTextboxCasa'>
                    <label htmlFor="textboxCasa">Descripcion</label>
                    <input type="text" id="textboxCasa" name="textboxCasa" required />
                </div>
                <div className='grupoCasa1'>
                    <div>
                        <label htmlFor="habitacionesCasa">Habitaciones</label>
                        <input type="number" id="habitacionesCasa" name="habitacionesCasa" required />
                    </div>
                    <div>
                        <label htmlFor="pisosCasa">Pisos</label>
                        <input type="number" id="pisosCasa" name="pisosCasa" required />
                    </div>
                    <div>
                        <label htmlFor="baniosCasa">Baños</label>
                        <input type="number" id="baniosCasa" name="baniosCasa" required />
                    </div>
                </div>
                <div className='grupoTextCasa'>
                    <div>
                        <input type="checkbox" id="piscinaCasa" name="piscinaCasa" value="yes" />
                        <label htmlFor="piscinaCasa">Piscina</label>
                    </div>
                    <div>
                        <input type="checkbox" id="balconCasa" name="balconCasa" value="yes" />
                        <label htmlFor="balconCasa">Balcón</label>
                    </div>
                    <div>
                        <input type="checkbox" id="amuebladoCasa" name="amuebladoCasa" value="yes" />
                        <label htmlFor="amuebladoCasa">Amueblado</label>
                    </div>
                    <div>
                        <input type="checkbox" id="cocinaCasa" name="cocinaCasa" value="yes" />
                        <label htmlFor="cocinaCasa">Cocina</label>
                    </div>
                    <div>
                        <input type="checkbox" id="garajeCasa" name="garajeCasa" value="yes" />
                        <label htmlFor="garajeCasa">Garaje</label>
                    </div>
                </div>
                <button className='miBotonCasa' type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default FormCasa;

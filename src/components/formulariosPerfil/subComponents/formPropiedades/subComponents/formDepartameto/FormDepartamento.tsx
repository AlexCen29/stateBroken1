import React from 'react';
import "./FormDepartamento.css";
import "../../../../../../../src/styles/index.css";

function FormDepartamento() {
    return (
        <div>
            <form className='miFormDepartamento' action="/submit" method="post" >
                <h1 >Nuevo departamento</h1>
                <div className='miDireccionDepartamento'>
                    <label htmlFor="direccionDepartamento">Direccion</label>
                    <input type="text" id="direccionDepartamento" name="direccionDepartamento" required />
                </div>
                <div className='miNombreEdificioDepartamento'>
                    <label htmlFor="nombreEdificioDepartamento">Nombre del edificio</label>
                    <input type="text" id="nombreEdificioDepartamento" name="nombreEdificioDepartamento" required />
                </div>
                <div className='grupoDepartamento1'>
                    <div>
                        <label htmlFor="precioRenta">Renta</label>
                        <input type="number" id="precioRenta" name="precioRenta" required />
                    </div>
                    <div>
                        <label htmlFor="anioConstruccionDepartamento">Año construccion</label>
                        <input type="number" id="anioConstruccionDepartamento" name="anioConstruccionDepartamento" required />
                    </div>
                    <div>
                        <label htmlFor="anioConstruccionDepartamento">Metros cuadrados</label>
                        <input type="number" id="anioConstruccionDepartamento" name="anioConstruccionDepartamento" required />
                    </div>
                </div>
                <div className='grupoDepartamento1'>
                    <div className='miNumPlantasDepartamento'>
                        <label htmlFor="numPlantasDepartamento">Numero de plantas</label>
                        <input type="number" id="numPlantasDepartamento" name="numPlantasDepartamento" required />
                    </div>
                </div>
                <div className='miTextboxDepartamento'>
                    <label htmlFor="textboxDepartamento">Descripcion</label>
                    <input type="text" id="textboxDepartamento" name="textboxDepartamento" required />
                </div>
                <div className='grupoDepartamento1'>
                    <div>
                        <label htmlFor="habitacionesDepartamento">Habitaciones</label>
                        <input type="number" id="habitacionesDepartamento" name="habitacionesDepartamento" required />
                    </div>
                    <div>
                        <label htmlFor="numPisoDepartamento">Número de piso</label>
                        <input type="number" id="numPisoDepartamento" name="numPisoDepartamento" required />
                    </div>
                    <div>
                        <label htmlFor="baniosDepartamento">Baños</label>
                        <input type="number" id="baniosDepartamento" name="baniosDepartamento" required />
                    </div>
                </div>
                <div className='grupoTextDepartamento'>
                    <div>
                        <input type="checkbox" id="balconDepartamento" name="balconDepartamento" value="yes" />
                        <label htmlFor="balconDepartamento">Balcón</label>
                    </div>
                    <div>
                        <input type="checkbox" id="amuebladoDepartamento" name="amuebladoDepartamento" value="yes" />
                        <label htmlFor="amuebladoDepartamento">Amueblado</label>
                    </div>
                    <div>
                        <input type="checkbox" id="cocinaDepartamento" name="cocinaDepartamento" value="yes" />
                        <label htmlFor="cocinaDepartamento">Cocina</label>
                    </div>
                </div>
                <button className='miBotonDepartamento' type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default FormDepartamento;

import "./FormTerreno.css";
import "../../../../../../../src/styles/index.css";

function FormTerreno() {
    return (
        <div>
            <form className='miFormTerreno' action="/submit" method="post" >
                <h1 >Nuevo terreno</h1>
                <div className='miDireccionTerreno'>
                    <label htmlFor="direccionTerreno">Direccion</label>
                    <input type="text" id="direccionTerreno" name="direccionTerreno" required />
                </div>
                <div className='grupoTerreno1'>
                    <div>
                        <label htmlFor="precioTerreno">Precio</label>
                        <input type="number" id="precioTerreno" name="precioTerreno" required />
                    </div>
                    <div>
                        <label htmlFor="anioConstruccionTerreno">Año construccion</label>
                        <input type="number" id="anioConstruccionTerreno" name="anioConstruccionTerreno" required />
                    </div>
                    <div>
                        <label htmlFor="anioConstruccionTerreno">Metros cuadrados</label>
                        <input type="number" id="anioConstruccionTerreno" name="anioConstruccionTerreno" required />
                    </div>
                </div>
                <div className='miTextboxTerreno'>
                    <label htmlFor="textboxTerreno">Descripcion</label>
                    <input type="text" id="textboxTerreno" name="textboxTerreno" required />
                </div>
                <div className='grupoTextTerreno'>
                    <div>
                        <input type="checkbox" id="piscinaTerreno" name="piscinaTerreno" value="yes" />
                        <label htmlFor="piscinaTerreno">Acceso a carreteras</label>
                    </div>
                    <div>
                        <input type="checkbox" id="balconTerreno" name="balconTerreno" value="yes" />
                        <label htmlFor="balconTerreno">Acceso agua</label>
                    </div>
                    <div>
                        <input type="checkbox" id="amuebladoTerreno" name="amuebladoTerreno" value="yes" />
                        <label htmlFor="amuebladoTerreno">Acceso electricidad</label>
                    </div>
                    <div>
                        <input type="checkbox" id="cocinaTerreno" name="cocinaTerreno" value="yes" />
                        <label htmlFor="cocinaTerreno">Arbolado</label>
                    </div>
                </div>
                <button className='miBotonTerreno' type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default FormTerreno;

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
                        <label htmlFor="piscinaTerreno">Carreteras</label>
                    </div>
                    <div>
                        <input type="checkbox" id="balconTerreno" name="balconTerreno" value="yes" />
                        <label htmlFor="balconTerreno">Posee Agua</label>
                    </div>
                    <div>
                        <input type="checkbox" id="amuebladoTerreno" name="amuebladoTerreno" value="yes" />
                        <label htmlFor="amuebladoTerreno">Posee electricidad</label>
                    </div>
                    <div>
                        <input type="checkbox" id="cocinaTerreno" name="cocinaTerreno" value="yes" />
                        <label htmlFor="cocinaTerreno">Posee arbolado</label>
                    </div>
                </div>
                <div className='grupoImg2'>
                    <div>
                        <label htmlFor="imgTerreno1">Imagen 1:</label>
                        <input type="file" id="imgTerreno1" name="imgTerreno1" accept="image/*"></input>
                    </div>
                    <div>
                        <label htmlFor="imgTerreno2">Imagen 2:</label>
                        <input type="file" id="imgTerreno2" name="imgTerreno2" accept="image/*"></input>
                    </div>
                    <div>
                        <label htmlFor="imgTerreno3">Imagen 3:</label>
                        <input type="file" id="imgTerreno3" name="imgTerreno3" accept="image/*"></input>
                    </div>
                    <div>
                        <label htmlFor="imgTerreno4">Imagen 4:</label>
                        <input type="file" id="imgTerreno4" name="imgTerreno4" accept="image/*"></input>
                    </div>
                </div>
                <button className='miBotonTerreno' type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default FormTerreno;

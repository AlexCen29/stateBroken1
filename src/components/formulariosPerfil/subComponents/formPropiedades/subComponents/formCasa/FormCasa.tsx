import React, { useState }  from 'react';
import "./FormCasa.css";
import "../../../../../../../src/styles/index.css";
interface IFormState {
    idEmpleadoFk: number;
    idTipoFk: number;
    direccion: string;
    descripcion: string;
    precioVenta: number;
    precioRenta: number;
    metrosCuadrados: number;
    metrosConstruidos: number;
    fechaDeCreacion: string;
    fechaUltimaModificacion: string;
    idEditorFk: number;
    habitaciones: number;
    banos: number;
    piscina: boolean;
    balcon: boolean;
    cocina: boolean;
    comedor: boolean;
    garaje: boolean;
    numPlantas: number;
    anoConstruccion: string;
    sistemaCalefaccion: boolean;
    aireAcondicionado: boolean;
    amueblada: boolean;
    status: boolean;
    img1Path: string;
    img2Path: string;
    img3Path: string;
    img4Path: string;
}

function getRandomBoolean() {
    return Math.random() < 0.5;
}

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomImage(num: number) {
    return `/img/${Math.random() < 0.5 ? 'casa' : 'depa'}${num}.jpg`;
}

function getDefaultFormState(): IFormState {
    return {
        idEmpleadoFk: Number(localStorage.getItem('idEmpleado')),
        idTipoFk: getRandomNumber(1, 2),
        direccion: `CALLE ${getRandomNumber(1, 100)} JUAN PABLO II`,
        descripcion: `CASA ${getRandomBoolean() ? 'MODERNA' : 'CLASICA'}`,
        precioVenta: getRandomNumber(100, 500),
        precioRenta: getRandomNumber(100, 500),
        metrosCuadrados: getRandomNumber(20, 100),
        metrosConstruidos: getRandomNumber(10, 50),
        fechaDeCreacion: new Date().toISOString(),
        fechaUltimaModificacion: new Date().toISOString(),
        idEditorFk: getRandomNumber(0, 10),
        habitaciones: getRandomNumber(1, 5),
        banos: getRandomNumber(1, 3),
        piscina: getRandomBoolean(),
        balcon: getRandomBoolean(),
        cocina: getRandomBoolean(),
        comedor: getRandomBoolean(),
        garaje: getRandomBoolean(),
        numPlantas: getRandomNumber(1, 3),
        anoConstruccion: new Date(getRandomNumber(1990, 2022), 0, 1).toISOString(),
        sistemaCalefaccion: getRandomBoolean(),
        aireAcondicionado: getRandomBoolean(),
        amueblada: getRandomBoolean(),
        status: true,
        img1Path: getRandomImage(1),
        img2Path: getRandomImage(2),
        img3Path: getRandomImage(3),
        img4Path: getRandomImage(4)
    };
}


const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
   
    const formState = getDefaultFormState();

    try {
        const response = await fetch('https://jimenezmiapi.somee.com/api/Inmueble', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(formState)
        });

        if (!response.ok) {
            throw new Error('Error al enviar el formulario');
        }

        const data = await response.json();
        alert('Formulario enviado correctamente');
        console.log(data);
    } catch (error) {
        console.error(error);
    }finally{
        
    }
};

export function FormCasa() {
    

        
    return (
        <div>
           <form className='miFormCasa' action="/submit" method="post" onSubmit={handleSubmit}>
                <h1 >Nueva casa</h1>
                <div className='miDireccionCasa'>
                    <label htmlFor="direccionCasa">Direccion</label>
                    <input type="text" id="direccionCasa" name="direccionCasa" required  />
                </div>
                <div className='grupoCasa1'>
                    <div>
                        <label htmlFor="precioCasa">Precio</label>
                        <input type="number" id="precioCasa" name="precioCasa" required  />
                    </div>
                    <div>
                        <label htmlFor="anioConstruccionCasa">Año construccion</label>
                        <input type="number" id="anioConstruccionCasa" name="anioConstruccionCasa" required  />
                    </div>
                    <div>
                        <label htmlFor="anioConstruccionCasa">Metros cuadrados</label>
                        <input type="number" id="anioConstruccionCasa" name="anioConstruccionCasa" required  />
                    </div>
                </div>
                <div className='miTextboxCasa'>
                    <label htmlFor="textboxCasa">Descripcion</label>
                    <input type="text" id="textboxCasa" name="textboxCasa" required  />
                </div>
                <div className='grupoCasa1'>
                    <div>
                        <label htmlFor="habitacionesCasa">Habitaciones</label>
                        <input type="number" id="habitacionesCasa" name="habitacionesCasa" required  />
                    </div>
                    <div>
                        <label htmlFor="pisosCasa">Pisos</label>
                        <input type="number" id="pisosCasa" name="pisosCasa" required  />
                    </div>
                    <div>
                        <label htmlFor="baniosCasa">Baños</label>
                        <input type="number" id="baniosCasa" name="baniosCasa" required  />
                    </div>
                </div>
                <div className='grupoTextCasa'>
                    <div>
                        <input type="checkbox" id="piscinaCasa" name="piscinaCasa" value="yes" />
                        <label htmlFor="piscinaCasa">Piscina</label>
                    </div>
                    <div>
                        <input type="checkbox" id="balconCasa" name="balconCasa" value="yes"  />
                        <label htmlFor="balconCasa">Balcón</label>
                    </div>
                    <div>
                        <input type="checkbox" id="amuebladoCasa" name="amuebladoCasa" value="yes"   />
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
                <div className='grupoImg'>
                    <div>
                        <label htmlFor="imgCasa1">Imagen 1:</label>
                        <input type="file" id="imgCasa1" name="imgCasa1" accept="image/*"></input>
                    </div>
                    <div>
                        <label htmlFor="imgCasa2">Imagen 2:</label>
                        <input type="file" id="imgCasa2" name="imgCasa2" accept="image/*"></input>
                    </div>
                    <div>
                        <label htmlFor="imgCasa3">Imagen 3:</label>
                        <input type="file" id="imgCasa3" name="imgCasa3" accept="image/*"></input>
                    </div>
                    <div>
                        <label htmlFor="imgCasa4">Imagen 4:</label>
                        <input type="file" id="imgCasa4" name="imgCasa4" accept="image/*"></input>
                    </div>
                </div>
                <button className='miBotonCasa' type="submit" onClick={handleSubmit}>Agregar</button>
            </form>
        </div>
    );

}


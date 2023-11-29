import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './ProcesodeVenta.css'

interface Task {
    id: number,
    title: string,
    body: string,
    list: number
}

export const DragAndDrop = () => {
    const [tasks, setTasks] = useState([
        { 
            id: 1,
            title: 'Tarea 1',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },
        { 
            id: 2,
            title: 'Tarea 2',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },
        { 
            id: 3,
            title: 'Tarea 3',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 3
        },
        { 
            id: 4,
            title: 'Tarea 4',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 2
        },
        { 
            id: 5,
            title: 'Tarea 5',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 2
        },
    ]);

    const getList = (list: number) => {
        return tasks.filter(item => item.list === list)
    }
    
    const startDrag = (evt: React.DragEvent<HTMLDivElement>, item: Task) => {
        evt.dataTransfer.setData('itemID', item.id.toString())
        console.log(item);
    }
    
    const draggingOver = (evt: React.DragEvent<HTMLDivElement>) => {
        evt.preventDefault();
    }
    
    const onDrop = (evt: React.DragEvent<HTMLDivElement>, list: number) => {
        const itemID = evt.dataTransfer.getData('itemID');
        const item = tasks.find(item => item.id === parseInt(itemID));
    
        if (item) {
            item.list = list;
    
            const newState = tasks.map(task => {
                if(task.id === parseInt(itemID)) return item;
                return task
            })
    
            setTasks(newState);
        }
    }

    return (
        <>
        <div className='ProcessVen'>
            <h1>
               {/*  Arrastrar y Soltar &nbsp;
                <img className='icon-react' src="src/assets/react.svg" alt="" /> */}
                PROCESOS DE VENTA
            </h1>
            <br/>
    
            <div className='drag-and-drop'>
                <div className='column column--1'>
                    <h3>
                        Tareas por hacer
                    </h3>
                    <div className='dd-zone' onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                        {getList(1).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
    
                <div className='column column--2'>
                    <h3>
                        Tareas en progreso
                    </h3>
                    <div className='dd-zone' onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 2))}>
                        {getList(2).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
    
                <div className='column column--3'>
                    <h3>
                        Tareas realizadas
                    </h3>
                    <div className='dd-zone' onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 3))}>
                        {getList(3).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
        </>
    );

                        }
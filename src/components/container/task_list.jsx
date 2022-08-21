import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('Task list component is going to unmount');
        };
    }, [tasks]);


    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/* Card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Taks:
                        </h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar= 'true' style={ {position: 'relative', height: '400'} }>
                    <table>
                        <thead>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>description</th>
                            <th scope='col'>Priority</th>
                            <th scope='col'>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {/* TODO: Iterar sobre una lista de tareas */}
                            <TaskComponent task={defaultTask}></TaskComponent>
                        </tbody>

                    </table>
                    </div>
                </div>

            </div>
           
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};



export default TaskListComponent;

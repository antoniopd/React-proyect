import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

// Importamos la hoja de estilos de task
import '../../styles/task.scss';


const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    return (
        <tr className='fw-normal'>
            <th>
                <spam className='ms-2'>{task.name}</spam>
            </th>
            <td className='align-middle'>
                <spam>{task.description}</spam>
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por un badge */}
                <spam>{task.level}</spam>
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por Iconos */}
                <spam>{task.completed}</spam>
            </td>

        </tr>

        // <div>
        //     <h2 className='task-name'>
        //        Nombre: { task.name }
        //     </h2>
        //     <h3>
        //         Descripción: { task.description }
        //     </h3>
        //     <h4>
        //         Level: { task.level }
        //     </h4>
        //     <h5>
        //         This task is: { task.completed ? 'COMPLETED':'PENDING' }
        //     </h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;

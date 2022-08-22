import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

// Importamos la hoja de estilos de task
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    /**
     * Function that returns a Badge
     * depending on the level of the task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'>
                    <spam className='badge bg-primary'>
                        {task.level}
                    </spam>
                </h6>)
                case LEVELS.URGENT:
                    return (<h6 className='mb-0'>
                        <spam className='badge bg-warning'>
                            {task.level}
                        </spam>
                    </h6>)
                    case LEVELS.BLOCKING:
                        return (<h6 className='mb-0'>
                            <spam className='badge bg-danger'>
                                {task.level}
                            </spam>
                        </h6>)
            default:
                break;
        }
    }
    
    /**
     * 
     * @returns Function that returns icon depending on completing of the task
     */
    function taskCompletedIcon(){
        if(task.completed){
            return (<i className='bi-toggle-on' style={{ color: 'green' }}></i>)
        }else{
          return (<i className='bi-toggle-off' style={{ color: 'grey' }}></i>)
        }
    }



    return (
        <tr className='fw-normal'>
            <th>
                <spam className='ms-2'>{task.name}</spam>
            </th>
            <td className='align-middle'>
                <spam>{task.description}</spam>
            </td>
            <td className='align-middle'>
            {/* Execution of function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
            {/* Execution of function to return icon depending on completing */}
              {taskCompletedIcon()}
                <i className='bi-trash' style={{ color: 'tomato' }}></i>
            </td>

        </tr>

    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;

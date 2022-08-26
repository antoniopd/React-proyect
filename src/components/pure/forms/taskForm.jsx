import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, lenght }) => {

    const nameRef = useRef('');
    const descriprionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriprionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold',
        backgroundColor: 'aquamarine'
    }
    const urgentStyle = {
        color: 'gold',
        fontWeight: 'bold',
        backgroundColor: 'darkgoldenrod'
    }
    const blockinglStyle = {
        color: 'red',
        fontWeight: 'bold',
        backgroundColor: 'salmon'
    }


    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' className='form-control form-control-lg' required autoFocus placeholder='Task Name' />
                <input ref={descriprionRef} id='inputDescription' className='form-control form-control-lg' required placeholder='Task Description' />
                <select className='form-control form-control-lg text-center' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgentStyle} value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option style={blockinglStyle} value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {lenght > 0 ? 'Add New Task' : 'Create your First Task'}
                </button>
            </div>

        </form>
    );
}

TaskForm.protTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;

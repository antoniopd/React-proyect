import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add}) => {

    const nameRef = useRef('');
    const descriprionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriprionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
        <div className='form-outline flex-fill'>
            <input ref={nameRef} id='inputName' className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>
            <input ref={descriprionRef} id='inputDescription' className='form-control form-control-lg' required placeholder='Task Description'/>
            <label htmlFor='selectLevel' className='sr-only'>Priority</label>
            <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                <option value={LEVELS.NORMAL}>
                    Normal
                </option>
                <option value={LEVELS.URGENT}>
                    Urgent
                </option>
                <option value={LEVELS.BLOCKING}>
                    Blocking
                </option>
            </select>
        </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>
    );
}

TaskForm.protTypes = {
    add: PropTypes.func.isRequired
}

export default TaskForm;

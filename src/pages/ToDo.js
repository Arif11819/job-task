import React from 'react';
import useTasks from '../hooks/useTasks';
import { useNavigate } from 'react-router-dom';

const ToDo = () => {
    const [tasks, setTasks] = useTasks();
    const navigate = useNavigate();
    const handleNavigateToCompleteTask = (event) => {
        event.preventDefault();
        navigate('/completetasks');
    }
    const handleNavigateToUpdateTask = (event) => {
        event.preventDefault();
        navigate('/updatetask');
    }
    return (
        <div>
            <h2 className='text-2xl text-center my-4'>All Task List Here</h2>
            <div className=''>
                {
                    tasks.map(task => <div key={task._id}>

                        <div className="overflow-x-auto flex justify-center">
                            <table class="table w-1/2">
                                <thead>
                                    <th>Id</th>
                                    <th>Daily Task</th>
                                    <th>Edit Task</th>
                                </thead>
                                <tbody>
                                    <th>{task._id}</th>
                                    <td> <input onClick={handleNavigateToCompleteTask} type="checkbox" class="checkbox" /> {task.daily_task}</td>
                                    <td><button onClick={handleNavigateToUpdateTask} className='btn btn-info'>Edit</button></td>
                                </tbody>
                            </table>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default ToDo;
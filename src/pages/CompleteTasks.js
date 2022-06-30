import React from 'react';
import { useParams } from 'react-router-dom';
import useCompleteTask from '../hooks/useCompleteTask';

const CompleteTasks = () => {
    const { tasksId } = useParams();
    const [tasks, setTasks] = useCompleteTask(tasksId);
    return (
        <div>
            <h2>Complete Task: {tasks.daily_task}</h2>
        </div>
    );
};

export default CompleteTasks;
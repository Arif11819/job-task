import { useEffect, useState } from "react";

const useCompleteTask = tasksId => {
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/tasks/${tasksId}`;
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [tasksId]);
    return [tasks, setTasks];
}

export default useCompleteTask;
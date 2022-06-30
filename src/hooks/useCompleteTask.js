import { useEffect, useState } from "react";

const useCompleteTask = id => {
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        const url = `https://calm-cliffs-44598.herokuapp.com/tasks/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [id]);
    return [tasks, setTasks];
}

export default useCompleteTask;
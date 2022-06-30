import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ToDo from '../ToDo';

const Home = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/tasks`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        navigate('/todo');
    };
    return (
        <div>
            <div className='my24'>
                <h2 className='text-center text-green-500 my-8 text-3xl font-bold'>Please Write Your Task!!</h2>
                <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                    <textarea rows="8" cols="70" className='bg-lime-200 border-black' {...register("daily_task")} required></textarea> <br />
                    <input className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success' type="submit" value='Add Task' />
                </form>
            </div>
            <ToDo></ToDo>
        </div>
    );
};

export default Home;
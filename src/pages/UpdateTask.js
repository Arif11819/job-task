import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

const UpdateTask = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();
    const onSubmit = (data, event) => {
        event.preventDefault();
        const url = `https://calm-cliffs-44598.herokuapp.com/tasks/${id}`;
        fetch(url, {
            method: 'PUT',
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
            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                <textarea rows="8" cols="50" className='bg-lime-200 border-black' {...register("daily_task")} required></textarea> <br />
                <input className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success' type="submit" value='Edit Task' />
            </form>
        </div>
    );
};

export default UpdateTask;
import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='flex justify-center'>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
            />
            <p className='text-green-500 my-48 font-bold'>You have selected: {format(date, 'PP')}</p>
        </div>
    );
};

export default Calender;
import  { FormEvent,  useState } from 'react';
import {FieldValues, useForm} from 'react-hook-form';

function Form() {

    const  form = useForm();
    console.log(form);
    
    const onSubmit = (data: FieldValues) => console.log(data) 

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="name" className='form-label'>Name:</label>
            <input { ...form.register('name') } id='name' type="text" className='form-control'/>
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age: </label>
            <input { ...form.register('age')} type="Number" className="form-control" id="age" />
        </div>
        <button type="submit" className='btn btn-primary'>submit</button>
    </form>

  )
}

export default Form;
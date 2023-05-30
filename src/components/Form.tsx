import  { FormEvent,  useState } from 'react';
import {FieldValues, useForm} from 'react-hook-form';

function Form() {

    interface FormData {
        name: string;
        age: number;
    }

    const  {register, handleSubmit, formState: {errors}} = useForm<FormData>();    
    
    const onSubmit = (data: FieldValues) => console.log(data) 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="name" className='form-label'>Name:</label>
            <input { ...register('name', {required: true, minLength: 3})} id='name' type="text" className='form-control'/>
            {errors.name?.type === 'required' && <p className='text-danger'>name is required</p>}
            {errors.name?.type === 'minLength' && <p className='text-danger'>min 3 charators required</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age: </label>
            <input { ...register('age')} type="Number" className="form-control" id="age" />
        </div>
        <button type="submit" className='btn btn-primary'>submit</button>
    </form>

  )
}

export default Form;
import React, { FormEvent, useRef } from 'react'

function Form() {

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent) =>{
        event.preventDefault();

        const person = {name:'', age:0};

        if(nameRef.current !== null){
            person.name = nameRef.current.value;
            nameRef.current.value = ''
        }
        
        if(ageRef.current !== null){
            person.age = parseInt(ageRef.current.value);
            ageRef.current.value = '';
        }

        console.log(person);
        
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className='form-label'>Name:</label>
            <input ref={nameRef} id='name' type="text" className='form-control'/>
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age: </label>
            <input ref={ageRef} type="Number" className="form-control" id="age" />
        </div>
        <button type="submit" className='btn btn-primary'>submit</button>
    </form>

  )
}

export default Form;
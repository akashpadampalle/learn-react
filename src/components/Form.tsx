import React, { FormEvent } from 'react'

function Form() {

    const handleSubmit = (event: FormEvent) =>{
        event.preventDefault();
        console.log('submitted');
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className='form-label'>Name:</label>
            <input id='name' type="text" className='form-control'/>
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age: </label>
            <input type="Number" className="form-control" id="age" />
        </div>
        <button type="submit" className='btn btn-primary'>submit</button>
    </form>

  )
}

export default Form;
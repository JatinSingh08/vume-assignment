import React from 'react'
import { Validator } from 'react'
function PersonalDetails({ formData, setFormData }, {isError, setIsError}) {
  return (
    <div className='personal-details-container' >

      <div className="input-container">

        <label htmlFor="nameInput">Name : </label>
        <input type="text" 
        
        id='nameInput'
        placeholder='Name...' 
        value={formData.name} 
        onChange={(e) => 
          setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div className='input-container'>


      <label htmlFor="numberInput">Phone : </label>
      <input type="number" 
      id='numberInput'
      placeholder='Phone No...'
       value={formData.phone}
       onChange={(e) => 
        setFormData({...formData, phone: e.target.value})}
       />
      </div>

      <div className="input-container">

       <label htmlFor="emailInput">Email : </label>
      <input type="email" 
      id='emailInput'
      name='email'
      placeholder='Email...'
       value={formData.email}
       onChange={(e) => {
        setFormData({...formData, email: e.target.value})
       }}
       />
      </div>
    </div>
  )
}

export default PersonalDetails

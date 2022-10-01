import React from 'react'

function OtherDetails({formData, setFormData}) {
  return (
    
      <div className='other-details-container'>

        <div className="input-container">

          <label htmlFor="locationInput">Location : </label>
          <input type="text" 
          id='locationInput'
          placeholder='Location...'
          value={formData.location}
          onChange={(e) => 
            setFormData({...formData, location: e.target.value})}
          />

        </div>

        <div className="input-container">

      <label htmlFor="ageInput">Age : </label>
      <input type="number" 
      id='ageInput'
      placeholder='Age...'
      value={formData.age}
      onChange={(e) => 
        setFormData({...formData, age: e.target.value})}
      
      />

        </div>

        <div className="input-container">

            <label htmlFor="universityInput">University : </label>
            <input type="University" 
            id='universityInput'
            placeholder='University Name...'
            value={formData.university}
            onChange={(e) => 
              setFormData({...formData, university: e.target.value})}
            
            />
        </div>
    </div>
   
  )
}

export default OtherDetails

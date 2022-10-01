import React from 'react'

function SuccessMsg({formData, setFormData}) {
  return (
    <div className='success-msg-container'>
      <h2 style={{fontWeight: 'bold'}}>Form Submitted Successfully.</h2>
      <h3>Thankyou for applying <span style={{fontWeight: ''}}>{formData.name}</span>.</h3>
      {/* <h2>Have a Nice day ✨</h2> */}
    </div>
  )
}

export default SuccessMsg

import React from 'react'
import { useState, useEffect } from 'react';
import OtherDetails from './OtherDetails';
import PersonalDetails from './PersonalDetails';
import SuccessMsg from './SuccessMsg';

function Form() {
  const [page, setPage] = useState(0);
  const pageTitles = ['Personal Details', 'Other Details', 'Submission Message'];
  const [isError, setIsError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    age: '',
    university: ''
  })

  
 

  const PageDisplay = () => {
    if(page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} isError={isError} setIsError={setIsError}/>;
    }
    else if(page === 1) {
      return <OtherDetails formData={formData} setFormData={setFormData} isError={isError} setIsError={setIsError}/>;
    }
    else if(page === 2 ) {
      return <SuccessMsg formData={formData} setFormData={setFormData}/>
    }
  }




  return (
    <div className='form'>
      
       <div className="progressbar">
        <div style={{width: page===0 ? "33.3%" : page===1 ? "66.6%" : "100%"}}></div>
       </div>
       <div className="header">
        <h1>{pageTitles[page]}</h1>
       </div>
       <div className="form-container">
          <div className="header"></div>
          <div className="body">
            {PageDisplay()}
          </div>

          {/* {isError ? 'Enter all fields' : 'ok'} */}
          <div className="footer">

            <button 
            disabled={page === 0 }
            onClick={() => setPage((currPage) => currPage - 1)}>Prev</button>

            <button
            disabled={ page === pageTitles.length - 1 || isError===true}
            onClick={() => {setPage(currPage => currPage + 1)}}>
              {page === 1 ? "Submit" : "Next"}
            </button>
            
          </div>
       </div>
      
    </div>
  )
}

export default Form
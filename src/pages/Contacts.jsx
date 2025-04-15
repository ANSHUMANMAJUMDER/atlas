import React from 'react'

function Contacts() {
  const handleFormSubmit = (formData)=>{
  console.log(formData.entries);
  const formInputData = Object.fromEntries(formData.entries());
  console.log(formInputData);
  }
  return (
    <section className='contact-section'>
      <div className='container-title'>
        Contact Us
      </div>
<div className='contact-wrapper container'>
<form action={handleFormSubmit}>
        <input className='form-control' type="text" name="username" id="" required autoComplete='false' placeholder='Enter your name'/>
        <textarea className='form-control' name="message" rows="10" autoComplete='false' id="" placeholder='Enter your Mesage'></textarea> 

        <button type='submit' value="Send">Send</button>  
      </form>
</div>
      
    </section>
  )
}

export default Contacts

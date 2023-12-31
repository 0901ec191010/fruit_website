import React, { useState } from 'react'

const Contact = () => {
const [data , setData]= useState({
fullname:" ",
phone: " ",
email:" ",
msg:" ",
})

const InputEvent=(event)=>{
  const {name , value}= event.target

  setData((prevalue)=>{
    return {
      ...prevalue,
      [name] : value,
    }
  })
}

  const formSubmit =(e)=>{
    e.preventDefault();
    alert(`
    My name is ${data.fullname} My mobile number is${data.phone} and email is${data.fullname} msg is${data.msg}`)

  }
  return (
    <>
        <div className='my-5'>
          <h1 className='text-center'>Contact Us</h1>
        </div>
        <div className='Container Contact_div'>
          <div className='row'>
            <div classNameName='col-md-6 col-10 mx-auto'>
              <form className='col-4' onSubmit={formSubmit} style={{marginLeft:"33%"}}>
              <div className="mb-1">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1"
   name='fullname'
    value={data.fullname} 
    onChange={InputEvent} 
    placeholder="Enter Your Name"/>
</div>
 <div className="mb-1">
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="number" className="form-control" id="exampleFormControlInput1"
   name='phone'
    value={data.phone} 
    onChange={InputEvent} 
    placeholder="Mobile number"/>
</div>
 <div className="mb-1">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1"
   name='email'
    value={data.email} 
    onChange={InputEvent} 
    placeholder="name@example.com"/>
</div>
 
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
  name='msg'
  value={data.msg}
  onChange={InputEvent}
  ></textarea>

  <div className='col-12'>
    <button className='btn btn-outline-primary' type='submit'>Submit form</button>
  </div>
</div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Contact

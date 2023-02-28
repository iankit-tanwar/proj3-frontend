import React from 'react'

export default function Login() {
  return (
    
    <form class="w-25 offset-4 mt-5">

        <h1 className='mb-3'>LOGIN</h1>
    
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</div>

  </form>
   
  )
}

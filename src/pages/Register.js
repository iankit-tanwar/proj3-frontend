import React, { useState } from 'react'
import swal from 'sweetalert';

export default function Register() {
    const [username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    

    let sendData=()=>{
        
        console.log(username)
        console.log(email)
        console.log(password)


        let payload={
            username,
            email,
            password


                        
        }
        console.log(payload)


        fetch(`http://localhost:1337/api/auth/local/register`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(payload)


        })
        .then((res)=>{return res.json()})

        .then((data)=>{console.log(data);
        if(data.jwt){
            //alert('register successfully')
            swal("Good job!", "You clicked the button!", "success");
        }
        
        })
        .catch((err)=>{});



    }



    /* let sendData=()=>{
        let data ={
            
                "username": "Vipin",
                "email": "Vipin@gmail.com",
                "password": "Vipin@123"
              
        }
        
        fetch(`http://localhost:1337/api/auth/local/register`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(data)
        }).then((res)=>{res.json()}).then((data)=>{console.log(data)}).catch(()=>{});



     }
*/


  return (
    <form class="w-25 offset-4 mt-5">
     <h1 className='mb-3'>REGISTER</h1>
    <div className="mb-3">
      <label htmlFor="username" className="form-label">username</label>
      <input  type="text" name='username'value={username} onChange={(e)=>{setUsername(e.target.value)}} className="form-control" id="username" aria-describedby="username" />
      </div>
      <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input  type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="email" aria-describedby="emailHelp" />
      </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="password" />
    </div>
    
    <button type="button" onClick={sendData} className="btn btn-primary">Register</button>
  
  
    </form>
     
  )
}

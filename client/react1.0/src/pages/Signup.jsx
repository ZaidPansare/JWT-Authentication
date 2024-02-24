import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './form.css'


const signup = () => {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate()

    function fetchUser(){
        axios.get("http://localhost:3001/register")
        .then(res=>console.log(res.data))
    }

    useEffect(()=>{
        fetchUser()
    },[])

    function handleSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:3001/register", {username,email,password})
        .then(()=>{
            navigate('/login')
            alert('Created Successfully')
            username('')
            email('')
            password('')
            fetchUser()
        })
        .catch(err=>console.log(err))
    }


  return (
    <div className='SignUp'>
        <form onSubmit={handleSubmit}>
            <h2>Signup Form</h2>
            <br />
            <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder='Enter your name'/>
            <br />
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter your email' />
            <br />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter your password'/>     
            <br />       
            <button type='submit'>Submit</button>
            <br />
            <p>Already have an account? <Link className='link' to={'/login'}>Login</Link></p>
        </form>
    </div>
  )
}

export default signup
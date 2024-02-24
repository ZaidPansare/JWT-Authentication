import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './form.css'

const login = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate()

    function fetchUser(){
        axios.get('http://localhost:3001/register')
        .then(res=>console.log(res.data))
    }

    useEffect(()=>{
        fetchUser()
    },[])

    async function handleSubmit(e){
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3001/login',{username,password})
            const token = response.data.token

            alert('Login Successfully')           
            setUsername('')
            setPassword('')
            fetchUser()
            navigate('/account')
            window.location.reload()
            localStorage.setItem('token', token)
        } catch (error){
            console.log(error)
        }
    }

  return (
    <div>  
         <div className='Login'>
        <form onSubmit={handleSubmit}>
            <h2>Login Form</h2>
            <br />
            <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder='Enter your name'/>
            <br />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter your password'/>     
            <br />       
            <button type='submit'>Submit</button>
            <br />
            <p>Already have an account? <Link className='link' to={'/signup'}>SignUp</Link></p>
        </form>
    </div>

    </div>
  )
}

export default login
import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

    const isUserSignedIn = !!localStorage.getItem('token')
    const Navigate = useNavigate()
    
    function handleLogout(){
        localStorage.removeItem('token')
        Navigate('/login')
    }

  return (
    <div className='Navbar'>

        {
            (isUserSignedIn)?(
                <>
                <Link className='link' to={'/account'}>Account</Link>
                <button onClick={handleLogout}> Signout</button>
                </>
            ) :(
                <>
                <Link className='link' to={'/login'}>Login</Link>
                <Link className='link' to={'/signup'}>Signup</Link>
                </>
            )
        }

    </div>
  )
}

export default Navbar
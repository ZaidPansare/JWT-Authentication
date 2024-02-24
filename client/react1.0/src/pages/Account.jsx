import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Account = () => {

    const isUserSignedIn = () => !!localStorage.getItem('token');
    const Navigate = useNavigate()

    useEffect(() => {
        if (!isUserSignedIn()) {
          return Navigate("/");
        }
      }, []);

  return (
    <div>
        <h1>Account Page</h1>
    </div>
  )
}

export default Account
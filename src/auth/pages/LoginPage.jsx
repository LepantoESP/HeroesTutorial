import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  const onLogin = ()=>{    
    login('Jose Maria Sanchez');
    navigate('/marvel',  {replace:true});    
  }
  return (
    <div className='contanier mt-5'>
      <h1>Welcome, please login</h1>
      <hr/>
      <button 
        className='btn btn-primary'
        onClick={onLogin}>
        Login
      </button>
    </div>
  )
}

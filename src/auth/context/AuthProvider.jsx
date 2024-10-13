import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';
import { types } from '../types/types';

export const AuthProvider = ({children}) => {

    //Construyo el default en el reducer
    const [authState, dispatch] = useReducer(authReducer, {});

    const userLogin = async(name = '')=>{

        const action ={
            type: types.login,
            payload: {
                id: 'ABC',
                name: name
            }
        }        
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            authState,
            login: userLogin, 
        }}>
            {children}
        </AuthContext.Provider>
        
  );
}


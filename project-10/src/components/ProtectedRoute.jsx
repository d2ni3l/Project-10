import React from 'react'
import { useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext'
import Saved from '../pages/Saved';
const ProtectedRoute = ({children}) => {
const navigate = useNavigate()
const {user} = UserAuth(); 
    if (!user === null){
      return <>{children}</>;
    }else {
        navigate('/')
    }
}

export default ProtectedRoute;
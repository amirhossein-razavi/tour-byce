import React from 'react';
import Login from '../Components/Login';
import Register from '../Components/Register';
import { useSelector } from 'react-redux'

function Authorization() {
  const status = useSelector(state => state.auth.status)
  return (
    status === 'login' ? <Login /> : <Register />
  );
}

export default Authorization;

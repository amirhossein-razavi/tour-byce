import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../Components/Home'

function Main(props) {
    return (
        <Home props={props}/>
    );
}

export default Main;

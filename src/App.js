import React from 'react';
import logo from './logo.svg';
import './App.css';
import Update1 from './update1';
import Update from './Update';
import up from './up';
import Update2 from './update2';


class App extends React.Component{
    render(){
    return (
        <div className="App">
            <div><Update/></div>
            <div><Update1/></div>
            <div><Update2/></div>
            

           
        </div>
    )
}}

export default App;
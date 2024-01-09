import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <input type={"password"}/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    return(
        <>
            <h1>This is APP component</h1>
        </>
    )
}

export default App;

import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <input type={"password"}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={6}/>
            <Accordion titleValue={"Menu"}/>
            <Accordion titlevalue={"Users"}/>
        </div>
    );
}

function AppTitle() {
    return (
        <>
            <h1>This is APP component</h1>
        </>
    )
}

export default App;

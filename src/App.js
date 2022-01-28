import React from "react";
import "./App.scss";
import Input from "./input";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Redirect from "./Redirect";
export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Input />}/>
                    <Route path="/:slug" element={<Redirect />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
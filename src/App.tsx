import React from 'react';
import Nav from "./Components/Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserContainer from "./Components/Users/UserContainer";
import PostContainer from "./Components/Posts/PostContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import ToDoListContainer from "./Components/TodoList/ToDoListContainer";
import Login from "./Components/Login/Login";
import Framer from "./Components/Framer/Framer";

function App() {
    return (
        <div className='dark:bg-gray-800 h-full bg-white min-h-screen'>
            <BrowserRouter>
                <Nav/>
                <div>
                    <Routes>
                        <Route path='/users' element={<UserContainer/>}/>
                        <Route path='/' element={<Framer/>}/>
                        <Route path='/posts' element={<PostContainer/>}/>
                        <Route path='/friends' element={<FriendsContainer/>}/>
                        <Route path='/todolist' element={<ToDoListContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

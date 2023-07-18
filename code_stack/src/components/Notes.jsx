import React from 'react'
import Header from './notes/Nav'
import Home from './notes/Home'
import CreateNote from './notes/CreateNote'
import EditNotes from './notes/EditNotes'
import{BrowserRouter, Router,Route , Routes} from 'react-router-dom'
export default function Notes({setIsLogin})
{
    return (
        <BrowserRouter>
            <div className="notes-page">
                <Header setIsLogin={setIsLogin}/>
                <section>
                    <Routes>
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/create" element={<CreateNote/>} exact />
                    <Route path="/edit/:id" element={<EditNotes />} exact />
                    </Routes>
                </section>
                
                           </div>
                           </BrowserRouter>
        
       
    )
}
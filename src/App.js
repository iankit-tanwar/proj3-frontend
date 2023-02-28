import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './compontnts/Layout'
import { route } from './route/Routes'




export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
        {route.map((currentValue,index,arr)=>{
            return  <Route path={currentValue.path} element={currentValue.element}></Route>
        })}

        </Route>
        


        
        




    </Routes>
    
    
    
    </BrowserRouter>
  )
}

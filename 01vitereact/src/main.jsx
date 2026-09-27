import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const anotherUser = " i am another ";

const reactElement = React.createElement(
    'a',
    {href:'https://google.com' , target:'_blank'},
    'click me to visist',
    anotherUser
)


createRoot(document.getElementById('root')).render(
    
  reactElement
 
)

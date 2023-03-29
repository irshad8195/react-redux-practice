import React from 'react'
import { Form } from 'react-bootstrap'
import CounterRedux from './components/CounterRedux'
import {Routes,Route} from 'react-router-dom'


const ReactRouter = () => {
  return (
    <div className='Text-center'>
      <Routes>
        <Route path="/" element={<CounterRedux/>}/>
      </Routes>

    </div>
  )
}

export default ReactRouter

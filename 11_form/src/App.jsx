import React, { useState } from 'react'

const App = () => {

  const submithandler= (e) =>{
    e.preventDefault()
    console.log('form  submitted by');
  }
  
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input type='text' placeholder='Enter your name'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
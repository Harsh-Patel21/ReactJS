import React, { useState } from 'react'

const App = () => {
  
  var num = 10
  function change(){
    console.log(num);
    num++
    console.log(num);
  }
  function changestate(){
    setA(30)
    setUser([40,50,60])
    setUsername('HARSH')
  }

  const [a, setA] = useState(10)
  const [user, setUser] = useState([10,20,30])
  const [username, setUsername] = useState('harsh')

const [x, setX] = useState(0)

function increase(){
  setX(x+1)
}
function decrease(){
  setX(x-1)
}
function jumpby5(){
  setX(x+5)
}

  return (
    <div>
      <div>
        <h1>Value of num is</h1>
        <button onClick={change}>click here</button>
      </div>

      <div>
        <h1>Value of num is {a}</h1>
        <h1>{user}</h1>
        <h1>Value of username is {username}</h1>
        <button onClick={changestate}>click here</button>
      </div>
      
      <div className='counter'>
        <h1>{x}</h1>
        <button onClick={increase}>incrememnt</button>
        <button onClick={decrease}>decrememnt</button>
        <button onClick={jumpby5}>jump by 5</button>
      </div>

    </div>
  )
}

export default App
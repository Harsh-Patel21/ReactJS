import React from 'react'

const App = () => {

  function btnclick(){
    console.log('button is clicked');
  }

  function mouse(){
    console.log('mouse entered');
  }

  function inputchange(){
    console.log('input changed.')
  }

  const pagescsrolling = (elem)=>{
    console.log('page scrolling '+elem);
  }

  return (
    <div>
      <h1>
        hello, Sarthak
      </h1>

        <button onMouseEnter={mouse} onClick={btnclick}>
          Change user
        </button>

        <button onClick={function(){console.log('hello');}}>
          click here
        </button>

        <input onChange={()=>{console.log('input clicked');}} type="text" placeholder='Enter name' />

        <input onChange={(elem)=>{console.log(elem.target.value);}} type="text" placeholder='Enter name' />

        <input onChange={function (elem) {
          inputchange()
        }}
        type='text'
        placeholder='Enter name' />

        <div className='box' onMouseMove={(elem)=>{
          console.log(elem);
          
        }}>
        </div>

        <div onWheel={pagescsrolling(elem.deltaY)}>
          <div className="page1"></div>
          <div className="page2"></div>
          <div className="page3"></div>
        </div>
    </div>
  )
}

export default App
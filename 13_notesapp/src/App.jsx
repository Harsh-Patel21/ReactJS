import React, { useState } from 'react'

const App = () => {
  
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submithandler= (e) =>{
    e.preventDefault()

    const copytask = [...task];
    copytask.push({title,detail})
    setTask(copytask)

    setTitle('')
    setDetail('')
  }

  const deletenote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>

      <form onSubmit={(e)=>{
        submithandler(e)
      }} className='flex flex-col lg:w-1/2 items-start gap-5 p-10 '>

        <h1 className='text-3xl font-bold'>Add Notes</h1>
        {/* first input for heading */}
        <input type="text" className='px-5 py-2 w-full outline-none border-2 rounded font-medium' placeholder='Enter Notes Heading:'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
        {/* Detailed input */}
        <textarea type='text' className='px-5 py-2 w-full outline-none h-32 border-2 font-medium rounded' placeholder='Enter Details'
        value={detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}
        />
        <button className='bg-white active:bg-gray-300 active:scale-99 text-black w-full px-5 py-2 outline-none rounded font-medium'>Add Note</button>

      </form>

      <div className=' p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        
        <div className="flex flex-wrap items-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl py-5 px-4 pb-5 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='text-black p-4 font-bold leading-tight text-xl'>{elem.title}</h3>
                <p className='text-black p-4 mt-2 leading-tight'>{elem.detail}</p>
              </div>
              <button onClick={() => {
                deletenote(idx)
              }} className='text-white w-full cursor-pointer active:scale-98 bg-red-600 py-2 rounded font-bold'>Delete</button>
            </div>

          })}
        </div>
      </div>

    </div>
  )
}

export default App
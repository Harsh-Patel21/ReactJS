import React from 'react'

const App = () => {

  const submithandler= (e) =>{
    e.preventDefault()
    console.log('form submitted');
    
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} className='flex flex-col lg:w-1/2 items-start gap-5 p-10 '>
        <input type="text" className='px-5 py-2 w-full outline-none border-2 rounded font-medium' placeholder='Enter Notes Heading:'/>
        <textarea type='text' className='px-5 py-2 w-full outline-none h-32 border-2 font-medium rounded' placeholder='Enter Details'/>
        <button className='bg-white text-black w-full px-5 py-2 outline-none rounded font-medium'>Add Note</button>
      </form>
      <div className=' p-10 lg:w-1/2 bg-gray-800'>
      <h1 className='text-3xl font-bold'>Your Notes</h1>
      <div className="flex flex-wrap gap-5 h-full overflow-auto">
        <div className="h-52 w-40 rounded-2xl bg-white"></div>
        <div className="h-52 w-40 rounded-2xl bg-white"></div>
        <div className="h-52 w-40 rounded-2xl bg-white"></div>
      </div>
      </div>
    </div>
  )
}

export default App
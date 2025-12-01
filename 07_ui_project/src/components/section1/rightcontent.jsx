import React from 'react'
import Rightcard from './rightcard.jsx'

const rightcontent = (props) => {
  console.log(props.users);
  
  return (
    <div id='right' className='flex flex-nowrap gap-10 overflow-x-auto rounded-4xl p-6 h-full w-2/3'>
      {props.users.map(function(elem, idx){
        return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default rightcontent
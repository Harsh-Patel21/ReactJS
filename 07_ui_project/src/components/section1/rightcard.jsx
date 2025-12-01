import React from 'react'
import Rightcardcontent from './rightcardcontent.jsx'

const rightcard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 rounded-4xl overflow-hidden relative'>
        <img className='h-full w-full object-cover ' src={props.img} alt="" />

        <Rightcardcontent id={props.id} tag={props.tag} />

    </div>
  )
}

export default rightcard
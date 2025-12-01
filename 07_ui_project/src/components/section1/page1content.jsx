import React from 'react'
import Leftcontent from './leftcontent.jsx'
import Rightcontent from './rightcontent.jsx'

const page1content = (props) => {
  return (
    <div className='h-[90vh] flex items-center gap-10 py-10 px-18 '>
        <Leftcontent />
        <Rightcontent users={props.users}/>
    </div>
  )
}

export default page1content
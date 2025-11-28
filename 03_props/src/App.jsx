import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Harsh'age={21} img='https://plus.unsplash.com/premium_photo-1762560038784-6d927493a029?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user='aman'age={18} img='https://images.unsplash.com/photo-1762595889811-b38d74945136?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user='sarthak'age={43} img='https://images.unsplash.com/photo-1762174867518-64b24d2bac59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
    </div>
  )
}

export default App
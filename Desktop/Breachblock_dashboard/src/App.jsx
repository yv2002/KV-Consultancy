import React from 'react'
import Courses from './components/Courses/Courses'
import Sidebar from './components/Sidebar/Sidebar'
const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      
      <div className='flex flex-row h-full'></div>
      <Sidebar/>
      <Courses/>
    </div>
  )
}

export default App

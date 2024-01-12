import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const naviagte = useNavigate()

  return (
      <div className='flex justify-between mx-10 md:mx-20 lg:mx-40'>
          <button className='hover:underline' onClick={()=>naviagte('/entries')}>Entries</button>
          <button className='hover:underline' onClick={()=>naviagte('/expenses')}>Expenses</button>
    </div>
  )
}

export default NavBar
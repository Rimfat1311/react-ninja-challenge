import React from 'react'

const Navbar = () => {
  const handleClick = (e) => {
    console.log('hello timnan', e);
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }
  return (
    <div className='flex p-20 justify-between  text-pink-700 mb-10'>
        <h1>The Dojo Blog</h1>
        <div>
            <ul className='flex gap-10'>
                <li><a href="">Home</a></li>
                <li><a href="">New Blog</a></li>
            </ul>
        </div>
        <button onClick={handleClick} className='bg-orange-500 p-5 hover:bg-slate-400'>click me</button>
        <button onClick={(e) => handleClickAgain('happy',e)}  className='bg-pink-500 p-5 hover:bg-slate-400'>click me again</button>

    </div>
  )
}

export default Navbar

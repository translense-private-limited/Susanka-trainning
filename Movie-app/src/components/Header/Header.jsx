import React from 'react'
import movie from '../../assets/movie.jpg'
import '../Header/Header.css'


const Header = () => {
  return (
    <header className='header'>
    <div className='user-image'>
        <h1 className='heading'>MOVIE APP</h1>
    </div>
    <img src={movie}/>
    </header>
  )
}

export default Header

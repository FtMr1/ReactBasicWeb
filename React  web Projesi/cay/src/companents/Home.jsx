import React from 'react'
import {Link} from 'react-router-dom'
import Cayback   from '../assets/cayback.jpg'
import '../style/Home.css'

function Home() {
  return (
    <div className='mainPage' style={{backgroundImage:`url(${Cayback})`}}>
          <div className='order'>
          <Link to="/menü">

            <button>Sipariş Ver</button>
          </Link>

          </div>

    </div>
  )
}

export default Home
import React from 'react'
import Cayback   from '../assets/cayback.jpg'
import '../style/Contact.css'


function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${Cayback})`}}></div>

      <div className='rightSide'  >
          <h1>Bizimle iletişime geçiniz..</h1>
          <form>
            <label>Ad Soyad</label>
            <input type="text" placeholder='adınızı giriniz'/>
            <label>E mail adresi</label>
            <input type="email" placeholder='mail giriniz'/>
            <textarea name="massage" id=""  rows="6" placeholder='mesajınızı giriniz'></textarea>
          </form>
      </div>
    </div>
  )
}

export default Contact
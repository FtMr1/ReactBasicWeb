import React from 'react'
import MenüItem from './MenüItem'
import '../style/Menu.css'
import { Data } from '../helpers/Data'

export const Menu = () => {
  return (
    <div className='menu'>
    <h1 className='menuTitle'>Çay Fidelerimiz</h1>
    <div className='menuList'>
    {Data.map((menuItem,key)=>{
        return(
        <MenüItem
        key={key}
        image={menuItem.image}
        name={menuItem.name}
        content={menuItem.content}
        price={menuItem.price}
        />
        );
    })}
    </div>
        </div>
  )
}

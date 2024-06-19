import LogoXBox from '../assets/logo-xbox.svg'
import React from 'react'
import Item from './Item'
export default function NavBar(){
    return(
        <>
            <div className="flex flex-col items-center justify-center gap-8 py-4 sm:flex-row sm:px-14 lg:px-52">
                <img src={LogoXBox} alt="Logotipo de XBOX" className='w-20'/>
                <Item/>
                <button className='w-80 h-10 bg-verde text-xs font-bold'>VER DISPONIBILIDADE</button>
            </div>
            
        </>
    )
}
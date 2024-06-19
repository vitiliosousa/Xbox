import React from "react"
export default function Item() {
    return(
        <>
            <div className='flex items-center justify-evenly text-branco text-[8px] w-full font-semibold'>
                <div className='px-2.5 py-1.5 bg-cinza rounded-2xl'>
                    <p>VISÃO GERAL</p>
                </div>
                <div className='px-2.5 py-1.5 bg-cinza rounded-2xl'>
                    <p>JOGOS</p>
                </div>
                <div className='px-2.5 py-1.5 bg-cinza rounded-2xl'>
                    <p>GALERIA</p>
                </div>
                <div className='px-2.5 py-1.5 bg-cinza rounded-2xl'>
                    <p>UNBOX</p>
                </div>
            </div>
        </>
    )
}
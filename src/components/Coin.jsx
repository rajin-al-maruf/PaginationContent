import React from 'react'

const Coin = ({id, name, symbol, price, image}) => {
  return (
    <div className='bg-slate-200 p-4 hover:cursor-pointer transition hover:-translate-y-1.5 duration-300 flex flex-col items-center rounded-md'>
      <img className='w-40' src={image} alt="" />
      <h2 className='mt-4 text-lg font-semibold'>{name}</h2>
      <h3>{price} USD</h3>
    </div>
  )
}

export default Coin

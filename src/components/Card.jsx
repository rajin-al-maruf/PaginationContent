import React from 'react'
import Coin from './Coin'

const Card = ({coinsData}) => {
  return (
    
    <div>
      <div className=' grid grid-cols-5 gap-10 max-w-5xl m-auto mt-10'>
        {coinsData.map(item => (
        <Coin 
            key={item.id}
            name={item.name}
            symbol={item.symbol}
            price={item.current_price}
            image={item.image}
        />
      ))}
      </div>
    </div>
  )
}

export default Card

import React from 'react'

const Pagination = ({currentPage, coinPerPage, setCurrentPage, setCoinPerPage, totalCoin}) => {
  
  let pageNums =[]

  for( let i=1; i <= Math.ceil(totalCoin/coinPerPage); i++){
    pageNums.push(i)
  }
  
  
    return (

    <div>
        <div className='mt-6 max-w-lg m-auto'>
            {pageNums.map((page, index) => (
                <button onClick={() => setCurrentPage(page)} key={index} 
                className={page === currentPage ? 'h-10 w-10 mx-2 rounded-md m-0 border bg-gray-800 text-white' 
                    : 'h-8 w-8 mx-2 rounded-md m-0 hover:bg-gray-300 border border-gray-800'}>{page}</button>
            ))}
        </div>
        
      
    </div>
  )
}

export default Pagination

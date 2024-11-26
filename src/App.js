import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css';
import Card from './components/Card';
import Pagination from './components/Pagination';

function App() {

  const [apiData, seApiData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [coinPerPage, setCoinPerPage] = useState(10);

  useEffect(() => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(response => response.json())
      .then(data => seApiData(data))
      .catch(error => console.log(error))
  },[])

  const lastCardIndex = currentPage * coinPerPage;
  const firstCardIndex = lastCardIndex - coinPerPage;
  const currentData = apiData.slice(firstCardIndex,lastCardIndex)

  console.log(apiData)
  return (
    <div>
      <Card 
        coinsData={currentData}
      />
      <Pagination 
        currentPage={currentPage}
        coinPerPage={coinPerPage}
        setCurrentPage={setCurrentPage}
        setCoinPerPage={setCoinPerPage}
        totalCoin={apiData.length}
      />
    </div>
  );
}

export default App;

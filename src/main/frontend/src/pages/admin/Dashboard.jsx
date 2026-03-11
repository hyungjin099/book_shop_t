import React, { useState } from 'react'

const Dashboard = () => {
  //오늘, 이 달의 주문건수 및 매출액 정보를 저장할 변수
  const [saleInfo, setSaleInfo] = useState({});

  //top 5 구매자 정보를 저장할 변수
  const [topBuyer, setTopBuyer] = useState([]);

  //top5 도서 정보를 저장할 변수
  const [topBook, setTopBook] = useState([]);

  //최근 10일간의 매출정보를 저장할 변수
  const [saleTen, setSaleTen] = useState([]);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
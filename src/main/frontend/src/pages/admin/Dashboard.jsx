import React, { useEffect, useState } from 'react'
import { dashboard_1, dashboard_2, dashboard_3, dashboard_4 } from '../../api/buyApi';
import TestBarChart from '../../components/buy/TestBarChart';

const Dashboard = () => {
  //오늘, 이 달의 주문건수 및 매출액 정보를 저장할 변수
  const [saleInfo, setSaleInfo] = useState({});

  //top 5 구매자 정보를 저장할 변수
  const [topBuyer, setTopBuyer] = useState([]);

  //top5 도서 정보를 저장할 변수
  const [topBook, setTopBook] = useState([]);

  //최근 10일간의 매출정보를 저장할 변수
  const [saleTen, setSaleTen] = useState([]);

  //마운트 시 모든 데이터를 조회
  useEffect(() => {
    getAllData();
  }, [])

  //모든 데이터를 조회하는 함수
  const getAllData = async() => {
    //한 번에 다수의 api를 조회
    const [response1, response2, response3, response4] = await Promise.all([
      dashboard_1(), //1
      dashboard_2(), //1
      dashboard_3(), //2
      dashboard_4()  //1
    ]);

    //조회한 데이터를 변수에 저장
    console.log('1번 데이터', response1.data);
    setSaleInfo(response1.data);

    console.log('2번 데이터', response2.data);
    setTopBuyer(response2.data);
    
    console.log('3번 데이터', response3.data);
    setTopBook(response3.data);
    
    console.log('4번 데이터', response4.data);
    setSaleTen(response4.data);

  }

  return (
    <div>
      <TestBarChart chartData={saleTen} />
    </div>
  )
}

export default Dashboard
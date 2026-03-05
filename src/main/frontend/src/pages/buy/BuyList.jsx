import React, { useEffect, useState } from 'react'
import { getBuyList } from '../../api/buyApi';
import ListTable from '../../components/common/ListTable'
import styles from './BuyList.module.css'
import dayjs from 'dayjs';

const BuyList = () => {
  //조회한 구매 목록 데이터를 저장ㅎ랄 state 변수
  const [buyList, setBuyList] = useState([]);

  //마운트 시 구매 목록 조회
  useEffect(() => {
    //구매 목록 조회
    getList();
  }, [])

  //구매 목록 조회 함수
  const getList = async () => {
    //로그인한 회원의 email
    const email = JSON.parse(sessionStorage.getItem('loginInfo')).memEmail;

    //구매 목록 조회 쿼리 실행 함수
    const response = await getBuyList(email);

    //조회한 데이터 출력
    console.log(response.data);

    //조회한 데이터를 buyList 변수에 저장
    setBuyList(response.data);
  }

  return (
    <div className={styles.container}>
    {
      buyList.length === 0
      ?
      <p className={styles.not_buy}>구매 내역이 존재하지 않습니다</p>
      :
      buyList.map((buy, i) => {
        return (
          <div className={styles.buyInfo} key={i}>
            <div className={styles.buy_header}>
              <p>{buyList.length - i} |</p>
              <p>
                {buy.detailList[0].bookDTO.bookTitle} 

                {
                  buy.detailList.length > 1 && 
                  <> 외 {buy.detailList.length - 1}개</>
                }
              </p>
              <p>{buy.buyPrice.toLocaleString()}원</p>
              <p>{dayjs(buy.buyDate).format('YYYY-MM-DD hh:mm')}</p>
            </div>
            <div className={styles.buy_content}>
              <ListTable>
                <thead>
                  <tr>
                    <td>No</td>
                    <td>도서정보</td>
                    <td>가 격</td>
                    <td>수 량</td>
                    <td>구매가격</td>
                  </tr>
                </thead>
                <tbody>
                {
                  buy.detailList.map((detail, j) => {
                    return (
                      <tr key={j}>
                        <td>{buy.detailList.length - j}</td>
                        <td className={styles.flex_td}>
                          <img src={`http://localhost:8080/upload/${detail.bookDTO.bookImgList[0].uploadFileName}`} />
                         <p>{detail.bookDTO.bookTitle}</p>
                        </td>
                        <td>
                          {detail.bookDTO.bookPrice.toLocaleString()}원
                        </td>
                        <td>
                          {detail.buyCnt}
                        </td>
                        <td>
                          {(detail.bookDTO.bookPrice * detail.buyCnt).toLocaleString()}원
                        </td>
                      </tr>
                    )
                  })
                }  
                </tbody>
              </ListTable>
            </div>
          </div>
        )
      })
    }  
    </div>
  )
}

export default BuyList
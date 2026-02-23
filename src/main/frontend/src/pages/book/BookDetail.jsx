import React, { useEffect, useState } from 'react'
import styles from './BookDetail.module.css'
import { useParams } from 'react-router-dom'
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { getBookDetail } from '../../api/bookApi';

const BookDetail = () => {
  //상세보기 하려는 도서의 도서번호
  const {bookNum} = useParams();

  //조회한 도서 상세 정보를 저장할 변수
  const [bookInfo, setBookInfo] = useState({});

  //마운트 시 상세 도서 정보 조회
  useEffect(() => {
    getDetail();
  }, []);

  //도서 상세 정보 호출 함수
  const getDetail = async () => {
    const response = await getBookDetail(bookNum);
    setBookInfo(response.data);
    console.log(response.data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.head_div}>
        <div>
        {
          bookInfo.bookImgList &&
          bookInfo.bookImgList.map((e, i) => {
            if(e.isMain === 'Y'){
              return (
                <img key={i} src={`http://localhost:8080/upload/${e.uploadFileName}`}/>
              )
            }
          })

          // <img src={`${bookInfo.bookImgList.filter((e) => {return e.isMain === 'Y'})[0].uploadFileName}`}/>

        }  
        </div>
        <div>
          <p className={styles.title}>{bookInfo.bookTitle}</p>
          <div className={styles.info_div}>
            <p>{bookInfo.author}</p>
            {/* <p>{bookInfo.bookPrice && bookInfo.bookPrice.toLocaleString()}</p> */}
            <p>{bookInfo.bookPrice?.toLocaleString()}</p>
            <Input value='1'/>
            <p>총 구매 가격</p>
            <div className={styles.btn_div}>
              <Button title='장바구니에 담기' variant='green'/>
              <Button title='바구 구매'/>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.intro_div}>
        {bookInfo.bookIntro}
      </p>

      {
        bookInfo.bookImgList &&
        bookInfo.bookImgList.map((e, i) => {
          if(e.isMain === 'N'){
            return (
              <img 
                key={i} 
                src={`http://localhost:8080/upload/${e.uploadFileName}`} 
                width='100%'/>
            )
          }
        })
      }

    </div>
  )
}





export default BookDetail
import React from 'react'
import styles from './EachBook.module.css'
import { useNavigate } from 'react-router-dom';

const EachBook = ({book}) => {
  const nav = useNavigate();

  //천단위 구분기호
  const money = 1000000;
  console.log(money.toLocaleString());

  return (
    <div className={styles.container}>
      <div className={styles.img_div} onClick={e => nav(`/detail/${book.bookNum}`)}>
        <img 
          style={{width:'100%', height:'210px'}}
          src={`http://localhost:8080/upload/${book.bookImgList[0].uploadFileName}`}
        />
        <div className={styles.black_div}></div>
        <p className={styles.detail_label}>상세보기</p>
      </div>

      <p 
        style={{textAlign:'center', margin:'0.5rem 0'}}
      >
        {book.bookTitle}
      </p>
      <p style={{textAlign:'center'}}>{book.bookPrice.toLocaleString()}원</p>
    </div>
  )
}

export default EachBook
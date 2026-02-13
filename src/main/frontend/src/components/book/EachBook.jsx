import React from 'react'
import styles from './EachBook.module.css'

const EachBook = ({book}) => {
  //천단위 구분기호
  const money = 1000000;
  console.log(money.toLocaleString());

  return (
    <div className={styles.container}>
      <div className={styles.img_div}>
        <img 
          style={{width:'100%', height:'210px'}}
          src="/무작정 따라가기 홍콩 마카오.jpg"
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
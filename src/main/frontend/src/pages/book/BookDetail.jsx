import React, { useEffect, useState } from 'react'
import styles from './BookDetail.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { getBookDetail } from '../../api/bookApi';
import { regCart } from '../../api/cartApi';

const BookDetail = () => {
  const nav = useNavigate();

  //상세보기 하려는 도서의 도서번호
  const {bookNum} = useParams();

  //조회한 도서 상세 정보를 저장할 변수
  const [bookInfo, setBookInfo] = useState({});

  //수량과 총가격을 저장할 state 변수
  const [cntAndPrice, setCntAndPrice] = useState({
    cnt : 1,
    price : 0
  }); 

  //마운트 시 상세 도서 정보 조회
  useEffect(() => {
    getDetail();
  }, []);

  //도서 상세 정보 호출 함수
  const getDetail = async () => {
    const response = await getBookDetail(bookNum);
    setBookInfo(response.data);
    console.log(response.data);

    setCntAndPrice({
      ...cntAndPrice,
      price : response.data.bookPrice
    })
  }

  //수량 변경 시 실행 함수
  const handleCntAndPrice = (e) => {
    //만약 숫자가 아닌 문자열이 입력되면 입력된 문자열을 빈문자열로 변경
    let cntValue = e.target.value.replace(/[^0-9]/g, '')

    //빈문자열일 경우 1로 변경
    cntValue = cntValue === '' ? '1' : cntValue;

    setCntAndPrice({
      cnt : cntValue, 
      price : bookInfo.bookPrice * Number(cntValue)
    })
  }

  //'장바구니 담기' 버튼 클릭 시 실행 함수
  const addCart = () => {
    //로그인 여부 확인
    const loginInfo = sessionStorage.getItem('loginInfo');
    if(loginInfo === null){
      const result = confirm('장바구니에 상품을 담으려면 로그인이 필요합니다.\n로그인 하시겠습니까?');

      if(result){
        nav('/login');
      }

      return ;
    }

    //장바구니 등록 실행
    insertCart();

  }

  //장바구니 등록 함수
  const insertCart = async () => {
    const loginInfo = sessionStorage.getItem('loginInfo');
    const loginInfo_obj = JSON.parse(loginInfo);

    const data = {
      bookNum : bookInfo.bookNum,
      cartCnt : cntAndPrice.cnt,
      memEmail : loginInfo_obj.memEmail
    };

    const response = await regCart(data);
    
    if(response.status === 201){
      const result = confirm('장바구니에 상품을 담았습니다.\n장바구니 페이지로 이동하시겠습니까?');

      if(result){
        nav('/my/cart-list');
      }
    }
    else{
      alert('예기치 않은 오류가 발생했습니다');
    }

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

            <Input 
              type="text" 
              value={cntAndPrice.cnt}
              onChange={e => handleCntAndPrice(e)}
            />

            <p>총 구매 가격 : {cntAndPrice.price.toLocaleString()}원</p>

            <div className={styles.btn_div}>
              <Button title='장바구니에 담기' variant='green' onClick={e => addCart()}/>
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
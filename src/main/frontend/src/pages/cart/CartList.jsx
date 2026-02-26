import React, { useEffect, useState } from 'react'
import ListTable from '../../components/common/ListTable'
import { delCart, getCartList } from '../../api/cartApi';
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import dayjs from 'dayjs';
import styles from './CartList.module.css'

const CartList = () => {
  //조회한 장바구니 목록을 저장할 state 변수
  const [cartList, setCartList] = useState([]);

  //총 구매 가격 state 변수
  const [totalPrice, setTotalPrice] = useState(0);

  //마운트되면 장바구니 목록을 조회
  useEffect(() => {
    getList();
  }, []);

  //장바구니 목록 데이터 조회 함수
  const getList = async () => {
    //로그인한 회원의 아이디
    const memEmail = JSON.parse(sessionStorage.getItem('loginInfo')).memEmail;

    const response = await getCartList(memEmail);
    console.log(response.data);
    setCartList(response.data);

    //총 구매 가격 세팅
    let sum = 0;
    for(const e of response.data){
      sum = sum + e.cartCnt * e.bookDTO.bookPrice;
    }

    setTotalPrice(sum);
  }

  //삭제 버튼 클릭 시 실행 함수
  const deleteCart = async (cartNum) => {
    if(confirm('정말 삭제할까요?')){
      const response = await delCart(cartNum);
      alert('삭제 했습니다');

      //장바구니 목록 조회
      getList();
    }
  }

  return (
    <div>
      <div>
        <ListTable>
          <colgroup>
            <col width='3%'/>
            <col width='3%'/>
            <col width='*'/>
            <col width='10%'/>
            <col width='10%'/>
            <col width='10%'/>
            <col width='15%'/>
            <col width='10%'/>
          </colgroup>
          <thead>
            <tr>
              <td>No</td>
              <td>
                <input type="checkbox" checked={true} />
              </td>
              <td>도서정보</td>
              <td>가 격</td>
              <td>수 량</td>
              <td>구매가격</td>
              <td>등록일자</td>
              <td>삭 제</td>
            </tr>
          </thead>
          <tbody>
          {
            cartList.length === 0 
            ?
            <tr>
              <td colSpan={8}>장바구니에서 등록된 도서가 없습니다.</td>
            </tr>
            :
            cartList.map((cart, i) => {
              return (
                <tr key={i}>
                  <td>{cartList.length - i}</td>
                  <td>
                    <input 
                      type="checkbox" 
                      checked={true}
                      value={cart.cartNum}
                    />
                  </td>
                  <td>  
                    <div className={styles.flex_div}>
                      <img 
                        style={{width:'60px'}}
                        src={`http://localhost:8080/upload/${cart.bookDTO.bookImgList[0].uploadFileName}`}
                      />
                      <p>{cart.bookDTO.bookTitle}</p>
                    </div>
                  </td>
                  <td>{cart.bookDTO.bookPrice.toLocaleString()}원</td>
                  <td className={styles.cnt_td}>
                    <Input value={cart.cartCnt}/>
                  </td>
                  <td>{(cart.bookDTO.bookPrice * cart.cartCnt).toLocaleString()}원</td>
                  {/* <td>{cart.cartDate}</td> */}
                  <td>{dayjs(cart.cartDate).format('YYYY-MM-DD HH:mm')}</td>
                  <td>
                    <Button 
                      title='삭제' 
                      variant='green'
                      onClick={e => deleteCart(cart.cartNum)}
                    />
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </ListTable>
      </div>
      <div>{totalPrice.toLocaleString()}원</div>
      <div></div>
    </div>
  )
}

export default CartList
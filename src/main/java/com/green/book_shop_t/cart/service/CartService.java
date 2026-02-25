package com.green.book_shop_t.cart.service;

import com.green.book_shop_t.cart.dto.CartDTO;
import com.green.book_shop_t.cart.mapper.CartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {
  private final CartMapper cartMapper;

  //장바구니 등록 기능
  public void insertCart(CartDTO cartDTO){
    //현재 도서가 내 장바구니에 포함되어 있는지 확인
    //memEmail이 조회가 됐다 -> 중복상품이다.
    //memEmail이 조회가 안댔다(memEmail == null) -> 새 상품이다
    String memEmail = cartMapper.isDuplicateBook(cartDTO);

    //내 장바구니에 없으면 추가한다(insert)
    if(memEmail == null){
      cartMapper.insertCart(cartDTO);
    }

    //내 장바구니에 있으면 수량 변경(update)
    else{
      cartMapper.updateCartBook(cartDTO);
    }
  }

  //장바구니 목록 조회 기능
  public List<CartDTO> selectCartList(String memEmail){
    return cartMapper.selectCartList(memEmail);
  }

  //장바구니 상품 삭제
  public void deleteCart(int cartNum){
    cartMapper.deleteCart(cartNum);
  }

}











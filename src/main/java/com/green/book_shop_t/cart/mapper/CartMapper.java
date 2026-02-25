package com.green.book_shop_t.cart.mapper;

import com.green.book_shop_t.cart.dto.CartDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CartMapper {
  //장바구니 등록 쿼리
  void insertCart(CartDTO cartDTO);

  //장바구니 목록 조회
  List<CartDTO> selectCartList(String memEmail);

  //장바구니 중복 확인 쿼리
  String isDuplicateBook(CartDTO cartDTO);

  //장바구니에 담긴 도서 수량 변경 쿼리
  void updateCartBook(CartDTO cartDTO);

  //장바구니 삭제 쿼리
  void deleteCart(int cartNum);

}










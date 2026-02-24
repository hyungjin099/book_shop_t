package com.green.book_shop_t.cart.mapper;

import com.green.book_shop_t.cart.dto.CartDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CartMapper {
  //장바구니 등록 쿼리
  void insertCart(CartDTO cartDTO);

}

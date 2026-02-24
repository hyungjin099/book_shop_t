package com.green.book_shop_t.cart.service;

import com.green.book_shop_t.cart.dto.CartDTO;
import com.green.book_shop_t.cart.mapper.CartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartService {
  private final CartMapper cartMapper;

  //장바구니 등록 기능
  public void insertCart(CartDTO cartDTO){
    cartMapper.insertCart(cartDTO);
  }

}











package com.green.book_shop_t.cart.controller;

import com.green.book_shop_t.cart.dto.CartDTO;
import com.green.book_shop_t.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/carts")
public class CartController {
  private final CartService cartService;

  //장바구니 등록 api
  //(POST) localhost:8080/carts
  @PostMapping("")
  public ResponseEntity<?> regCart(@RequestBody CartDTO cartDTO){
    try{
      cartService.insertCart(cartDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch (Exception e){
      log.error("장바구니 등록 api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  //장바구니 목록 조회 api
  //(GET) localhost:8080/carts/이메일
  @GetMapping("/{memEmail}")
  public ResponseEntity<?> getCartList(@PathVariable("memEmail") String memEmail){
    try{
      List<CartDTO> list = cartService.selectCartList(memEmail);
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch (Exception e){
      log.error("장바구니 목록 조회 api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  //장바구니 상품 삭제 api
  //(DELETE) localhost:8080/carts/1
  @DeleteMapping("/{cartNum}")
  public ResponseEntity<?> deleteCart(@PathVariable("cartNum") int cartNum){
    try{
      cartService.deleteCart(cartNum);
      return ResponseEntity.status(HttpStatus.OK).build();
    }catch(Exception e){
      log.error("장바구니 상품 삭제 api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

}










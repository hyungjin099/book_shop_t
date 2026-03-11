package com.green.book_shop_t.buy.controller;

import com.green.book_shop_t.buy.dto.BuyDTO;
import com.green.book_shop_t.buy.dto.BuyDetailDTO;
import com.green.book_shop_t.buy.dto.TopBookDTO;
import com.green.book_shop_t.buy.dto.TopBuyerDTO;
import com.green.book_shop_t.buy.service.BuyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/buys")
public class BuyController {
  private final BuyService buyService;

  //구매 등록 api
  //(POST) localhost:8080/buys
  @PostMapping("")
  public ResponseEntity<?> addBuy(@RequestBody BuyDTO buyDTO){
    try{
      System.out.println(buyDTO);
      buyService.insertBuy(buyDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch(Exception e){
      log.error("구매 정보 등록 중 api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  //구매 목록 조회
  //(GET) localhost:8080/buys/abc
  @GetMapping("/{memEmail}")
  public ResponseEntity<?> getBuyList(@PathVariable("memEmail") String memEmail){
    try{
      List<BuyDTO> list = buyService.selectBuyList(memEmail);
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch (Exception e){
      log.error("구매 목록 조회 api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  //오늘과 이 달의 주문건수 및 매출액 조회 api
  @GetMapping("/sale-info")
  public ResponseEntity<?> selectBuyList(){
    try{
      Map<String, Integer> saleInfoMap = buyService.selectSaleInfo();
      return ResponseEntity.status(HttpStatus.OK).body(saleInfoMap);
    }catch (Exception e){
      log.error("주문건수/매출액 조회 api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  //상위 구매자 5명
  @GetMapping("/top-buyer")
  public ResponseEntity<?> selectTopBuyer(){
    try{
      List<TopBuyerDTO> list = buyService.selectTopBuyer();
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch (Exception e){
      log.error("상위 구매자 5명 api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  //구매가 많은 책 상위 5개
  @GetMapping("/top-book")
  public ResponseEntity<?> selectTopBook(){
    try{
      List<TopBookDTO> list = buyService.selectTopBook();
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch (Exception e){
      log.error("구매가 많은 책 상위 5개 api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  //최근 10일간의 매출정보
  @GetMapping("/sale-10")
  public ResponseEntity<?> selectSale10(){
    try{
      //9~0까지 데이터가 들어있는 리스트
      List<Integer> dayList = new ArrayList<>();
      for(int i = 9 ; i > -1 ; i--){
        dayList.add(i);
      }

      List<Map<String, Object>> list = buyService.selectSale10(dayList);
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch (Exception e){
      log.error("최근 10일간의 매출정보 api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

}









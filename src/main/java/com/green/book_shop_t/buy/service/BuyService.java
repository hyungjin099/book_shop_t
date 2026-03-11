package com.green.book_shop_t.buy.service;

import com.green.book_shop_t.buy.dto.BuyDTO;
import com.green.book_shop_t.buy.dto.BuyDetailDTO;
import com.green.book_shop_t.buy.dto.TopBookDTO;
import com.green.book_shop_t.buy.dto.TopBuyerDTO;
import com.green.book_shop_t.buy.mapper.BuyMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class BuyService {
  private final BuyMapper buyMapper;

  //트랜젝션
  //구매 정보 등록
  @Transactional(rollbackFor = Exception.class)
  public void insertBuy(BuyDTO buyDTO){
    //SHOP_BUY INSERT
    buyMapper.insertBuy(buyDTO);

    //BUY_DETAIL INSERT
    buyMapper.insertBuyDetail(buyDTO);
  }

  //구매목록조회
  public List<BuyDTO> selectBuyList(String memEmail){
    return buyMapper.selectBuyList(memEmail);
  }

  //오늘과 이 달의 주문건수 및 매출액 조회
  public Map<String, Integer> selectSaleInfo(){
    return buyMapper.selectSaleInfo();
  }

  //상위 5명 구매자
  public List<TopBuyerDTO> selectTopBuyer(){
    return buyMapper.selectTopBuyer();
  }

  //판매가 많은 도서  5개
  public List<TopBookDTO> selectTopBook(){
    return buyMapper.selectTopBook();
  }

  //최근 10일간의 매출금액
  //매개변수로 9~0이 들어있는 List를 전달해야 함
  public List<Map<String, Object>> selectSale10(List<Integer> dayList){
    return  buyMapper.selectSale10(dayList);
  }




}









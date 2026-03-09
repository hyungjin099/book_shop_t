package com.green.book_shop_t.buy.mapper;

import com.green.book_shop_t.buy.dto.BuyDTO;
import com.green.book_shop_t.buy.dto.BuyDetailDTO;
import com.green.book_shop_t.buy.dto.SaleInfoDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BuyMapper {
  //SHOP_BUY 테이블 INSERT
  void insertBuy(BuyDTO buyDTO);

  //BUY_DETAIL 테이블 INSERT
  void insertBuyDetail(BuyDTO buyDTO);

  //구매목록조회
  List<BuyDTO> selectBuyList(String memEmail);

  //오늘과 이 달의 주문건수 및 매출액 조회
  SaleInfoDTO selectSaleInfo();

}





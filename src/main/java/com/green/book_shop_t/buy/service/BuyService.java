package com.green.book_shop_t.buy.service;

import com.green.book_shop_t.buy.dto.BuyDTO;
import com.green.book_shop_t.buy.dto.BuyDetailDTO;
import com.green.book_shop_t.buy.mapper.BuyMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BuyService {
  private final BuyMapper buyMapper;

  //트랜젝션
  //구매 정보 등록
  @Transactional(rollbackFor = Exception.class)
  public void insertBuy(BuyDTO buyDTO, BuyDetailDTO buyDetailDTO){
    //SHOP_BUY INSERT
    buyMapper.insertBuy(buyDTO);

    buyDetailDTO.setBuyNum(buyDTO.getBuyNum());

    //BUY_DETAIL INSERT
    buyMapper.insertBuyDetail(buyDetailDTO);
  }

}

package com.green.book_shop_t.buy.service;

import com.green.book_shop_t.buy.dto.BuyDTO;
import com.green.book_shop_t.buy.dto.BuyDetailDTO;
import com.green.book_shop_t.buy.mapper.BuyMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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

}









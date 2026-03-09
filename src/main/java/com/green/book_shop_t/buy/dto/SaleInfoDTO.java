package com.green.book_shop_t.buy.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//오늘, 이 달의 주문건수 및 매출액 조회 데이터를 가져오기 위한 DTO
@Setter
@Getter
@ToString
public class SaleInfoDTO {
  private int saleCntToday;
  private int saleCntMonth;
  private int saleToday;
  private int saleMonth;
}

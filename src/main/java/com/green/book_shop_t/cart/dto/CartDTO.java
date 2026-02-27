package com.green.book_shop_t.cart.dto;

import com.green.book_shop_t.book.dto.BookDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@ToString
public class CartDTO {
  private int cartNum;
  private int bookNum;
  private int cartCnt;
  private LocalDateTime cartDate;
  private String memEmail;
  private BookDTO bookDTO;
}

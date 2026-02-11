package com.green.book_shop_t.book.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Setter
@Getter
@ToString
public class BookDTO {
  private int bookNum;
  private String bookTitle;
  private String author;
  private int bookPrice;
  private int bookStock;
  private String bookIntro;
  private LocalDate publishDate;
  private int cateNum;
}

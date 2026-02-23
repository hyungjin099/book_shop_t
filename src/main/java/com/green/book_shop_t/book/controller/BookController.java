package com.green.book_shop_t.book.controller;

import com.green.book_shop_t.book.dto.BookDTO;
import com.green.book_shop_t.book.dto.BookImgDTO;
import com.green.book_shop_t.book.service.BookService;
import com.green.book_shop_t.util.UploadUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/books")
public class BookController {
  private final BookService bookService;
  private final UploadUtil uploadUtil;

  //도서 등록 api
  //(POST) localhost:8080/books
  //파일이 포함된 데이터를 REACT에서 FormData 객체에 담겨 전송됨. 이때, 데이터를 전달받는 문법도 달라짐.
  //BookDTO 매개변수 : FormData로 전달되는 데이터 중 key값이 BookDTO와 동일한 데이터를 전달받는 매개변수
  //전송된 파일 데이터를 전달받을 때는 MultipartFile 자료형으로 전달받음
  // ex> @RequestParam(전송되는 파일의 key값) MultipartFile 데이터를전달받을변수명
  @PostMapping("")
  public ResponseEntity<?> regBook(BookDTO bookDTO
                                    , @RequestParam("mainImg") MultipartFile mainImgFile
                                    , @RequestParam("subImgs") MultipartFile[] subImgs ) {
    try{
      //대표 파일 첨부 기능
      //리턴으로 원본파일명, 첨부파일명, isMain(Y)을 BookImgDTO 자료형으로 리턴해줌
      BookImgDTO dto = uploadUtil.fileUpload(mainImgFile);

      //상세 파일들 첨부 기능
      //리턴으로 원본파일명, 첨부파일명, isMain(N)인 BookImgDTO 자료형 다수를 List로 리턴해줌
      List<BookImgDTO> imgList = uploadUtil.multipleFileUpload(subImgs);

      //쿼리 실행 시 빈값을 채울 모든 데이터를 통합
      imgList.add(dto);

      //다음에 insert할 bookNum 데이터 조회
      int nextBookNum = bookService.getNextBookNum();

      //조회한 nextBookNum을 bookDTO에 저장
      bookDTO.setBookNum(nextBookNum);

      //imgList안의 모든 BookImgDTO 객체에도 도서번호를 저장
      for(BookImgDTO e : imgList){
        e.setBookNum(nextBookNum);
      }

      //SHOP_BOOK, BOOK_IMG 테이블에 데이터 INSERT
      bookService.regBook(bookDTO, imgList);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch (Exception e){
      log.error("도서 등록 api 에러", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  //도서 목록 조회 api
  //(GET) localhost:8080/books
  @GetMapping("")
  public ResponseEntity<?> getList(){
    try{
      List<BookDTO> list = bookService.selectList();
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch(Exception e) {
      log.error("도서 목록 조회 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  //도서 상세 조회 api
  //(GET) localhost:8080/books/3
  @GetMapping("/{bookNum}")
  public ResponseEntity<?> getDetail(@PathVariable("bookNum") int bookNum){
    try{
      //도서 상세 정보 조회
      BookDTO result = bookService.getDetail(bookNum);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      log.error("도서 상세 조회 api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

}










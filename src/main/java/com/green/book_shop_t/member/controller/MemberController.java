package com.green.book_shop_t.member.controller;

import com.green.book_shop_t.member.dto.MemberDTO;
import com.green.book_shop_t.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {
  private final MemberService memberService;

  //회원가입 api
  //(POST) localhost:8080/members
  @PostMapping("")
  public ResponseEntity<?> join(@RequestBody MemberDTO memberDTO){
    try{
      memberService.join(memberDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch(Exception e){
      log.error("회원가입 작업 중 에러 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

}













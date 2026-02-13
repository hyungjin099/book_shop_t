package com.green.book_shop_t.member.service;

import com.green.book_shop_t.member.dto.MemberDTO;
import com.green.book_shop_t.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
  private final MemberMapper memberMapper;

  //회원가입 기능
  public void join(MemberDTO memberDTO){
    memberMapper.join(memberDTO);
  }

  //사용가능 이메일 확인 기능(사용 가능하면 return true)
  public boolean isUsableEmail(String memEmail){
    //이메일이 조회됐다 -> 중복 이메일이다
    //이메일이 조회 안 됨(email == null) -> 사용 가능 이메일이다
    String email = memberMapper.isUsableEmail(memEmail);
    return email == null;
  }

  //로그인 여부 확인 기능 메서드
  public MemberDTO login(MemberDTO memberDTO){
    //로그인 하려는 회원의 이메일, 이름, 권한정보를 리액트에 전달
    //데이터 조회 안 됨(result == null) -> 로그인 불가능
    MemberDTO result = memberMapper.login(memberDTO);
    return result;
  }

}










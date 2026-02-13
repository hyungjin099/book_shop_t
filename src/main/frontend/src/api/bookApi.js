//SHOP_BOOK 테이블과 관련한 AXIOS 기능 정의 파일

import axios from "axios";

//도서 등록 함수
export const insertBook = async (bookData) => {
  try{
    const response = await axios.post('http://localhost:8080/books', bookData);
    return response;
  }catch(e){
    console.log('도서 등록 axios 에러', e);
  }
}

//도서 목록 조회 axios
export const getBookList = async () => {
  try{
    const response = await axios.get('http://localhost:8080/books');
    return response;
  }catch(e){
    console.log('도서 목록 조회 axios 오류', e);
  }
}
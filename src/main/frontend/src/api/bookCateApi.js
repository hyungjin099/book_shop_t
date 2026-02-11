//BOOK_CATEGORY 테이블과 통신하는 기능 정의

import axios from "axios";

//카테고리 목록 조회 axios
export const getCateList = async () => {
  try{
    const response = await axios.get('http://localhost:8080/categories');
    return response;
  }catch(e){
    console.log('카테고리 목록 axios 오류', e);
  }
}


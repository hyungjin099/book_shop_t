//회원과 관련된 axios 기능을 정의한 파일

import axios from "axios";

/**
 *  회원가입 쿼리 실행 axios 함수
 * @param {Object} joinData 회원가입 시 입력한 객체 데이터
 * @returns 
 */
export const insertMember = async (joinData) => {
  try{
    const response = await axios.post('http://localhost:8080/members', joinData);
    return response;
  }catch(e){
    console.log('회원가입 axios 에러', e);
  }
}


/**
 * 입력한 이메일이 중복인지 확인하는 api
 * @param {string} memEmail 입력한 이메일
 * @returns 
 */
export const checkId = async (memEmail) => {
  try{
    const response = await axios.get(`http://localhost:8080/members/checkId/${memEmail}`);
    return response;
  }catch(e){
    console.log('이메일 중복 확인 axios 에러', e);
  }
}
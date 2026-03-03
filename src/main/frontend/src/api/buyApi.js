import axios from "axios"

export const insertBuy = async (data) => {
  try{
    const responce = await axios.post('http://localhost:8080/buys', data);
    return responce;
  }catch(e){
    console.log('도서 구매 등록 axios 오류', e)
  }
}
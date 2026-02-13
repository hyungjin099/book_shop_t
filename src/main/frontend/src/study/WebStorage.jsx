import React from 'react'

//Web Storage(cookie, localstorage, sessionstorage)
//에는 문자열 데이터만 저장 가능
const WebStorage = () => {
  //Local Storage에 데이터 저장
  localStorage.setItem('local-name', 'kim');
  localStorage.setItem('local-age', '20');
  
  //Local Storage에 저장된 데이터 읽기
  localStorage.getItem('local-name'); //kim
  localStorage.removeItem('local-age'); // key가 local-age인 데이터 삭제

  //session storage에 데이터 저장
  sessionStorage.setItem('session-name', 'lee');
  sessionStorage.setItem('session-age', '30');

  //session storage에 저장된 데이터 읽기
  sessionStorage.getItem('session-age'); // '30'
  sessionStorage.removeItem('session-age');

  return (
    <div>WebStorage</div>
  )
}

export default WebStorage
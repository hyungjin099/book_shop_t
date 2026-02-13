import React from 'react'
import styles from './ManagerHeader.module.css'
import { useNavigate } from 'react-router-dom';

const ManagerHeader = ({setLoginInfo}) => {
  const nav = useNavigate();

  const loginInfo = sessionStorage.getItem('loginInfo');
  const loginInfo_obj = JSON.parse(loginInfo); 

  return (
    <div className={styles.container}>
      <img src="/logo.png" className={styles.logo} />
      <ul>
        {
          loginInfo == null
          ?
          <>
           <li>Login</li>
            <li>Join</li>
          </>
          :
          <>
            <li>{loginInfo_obj.memEmail}님 반갑습니다.</li>
            <li 
              style={{cursor:'pointer'}}
              onClick={() => {
                sessionStorage.removeItem('loginInfo');
                setLoginInfo({});
                nav('/');
              }}
            >Louout</li>
          </> 
        }
      </ul>
    </div>
  )
}

export default ManagerHeader
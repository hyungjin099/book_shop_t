import React from 'react'
import styles from './ManageSide.module.css'
import { FaChartColumn, FaCubesStacked, FaSquarePlus } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'

//<NavLink to='이동할 url' className={(param) => {}}></NavLink>
//NavLink 컴포넌트의 className props에는 화살표 함수가 들어온다.
//이 화살표 함수의 매개변수를 출력하면 다음과 같은 데이터를 얻을 수 있다.
//{isActive: true, isPending: false, isTransitioning: false}
//isActive key의 value는 해당 메뉴가 선택됐을때는 true, 그렇지 않으면 false값을 가진다.
const UserSide = () => {
  return (
    <div className={styles.container}>
      <div>
        {/* <h5>사용자 메뉴</h5> */}
        <ul>
          <li>
            <FaChartColumn className={styles.icon}/>
            <p>
              <NavLink 
                to={'/my/cart-list'}
                className={param => param.isActive ? styles.active : ''}
              >
                장바구니
              </NavLink>
            </p>
          </li>
          <li>
            <FaSquarePlus className={styles.icon}/>
            <p>
              <NavLink 
                to={'/my/buy-list'}
                className={(param) => {return param.isActive ? styles.active : ''}}
              >
                구매내역
              </NavLink>
            </p>
          </li>
          <li>
            <FaCubesStacked className={styles.icon}/>
            <p>
              <NavLink 
                to={'/my/my-page'}
                className={(param) => {return param.isActive ? styles.active : ''}}
              >
                내정보수정
              </NavLink>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserSide
import React from 'react'
import styles from './ManageSide.module.css'
import { FaChartColumn, FaCubesStacked, FaSquarePlus } from 'react-icons/fa6'

const UserSide = () => {
  return (
    <div className={styles.container}>
      <div>
        {/* <h5>사용자 메뉴</h5> */}
        <ul>
          <li>
            <FaChartColumn className={styles.icon}/>
            <p>장바구니</p>
          </li>
          <li>
            <FaSquarePlus className={styles.icon}/>
            <p>구매내역</p>
          </li>
          <li>
            <FaCubesStacked className={styles.icon}/>
            <p>내정보수정</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserSide
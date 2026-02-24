import React from 'react'
import styles from './ManagerLayout.module.css'
import Header from './Header'
import UserSide from './UserSide'
import { Outlet } from 'react-router-dom'

const UserLayout = ({setLoginInfo}) => {
  return (
    <div className={styles.container}>
      <Header setLoginInfo={setLoginInfo}/>
      <div className={styles.main}>
        <div className={styles.side}>
          <UserSide />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default UserLayout
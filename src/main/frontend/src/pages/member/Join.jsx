import React from 'react'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input';
import styles from './Join.module.css'

const Join = () => {

  return (
    <div className={styles.container}>
      <div>
        <p>Email</p>
        <div className={styles.id_div}>
          <Input />
          <Button title='중복확인'/>
        </div>
      </div>
      <div>
        <p>Password</p>
        <Input type='password'/>
      </div>
      <div>
        <p>Confirm Password</p>
        <Input type='password'/>
      </div>
      <div>
        <p>Name</p>
        <Input />
      </div>
      <div>
        <p>Tel</p>
        <div className={styles.tel_div}>
          <Input />
          <Input />
          <Input />
        </div>
      </div>
      <div>
        <p>Address</p>
        <div className={styles.addr_div}>
          <Input />
          <Button title='검색' variant='gray'/>
        </div>
        <Input />
      </div>
      <div className={styles.btn_div}>
        <Button title='회원가입'/>
      </div>

      

    </div>
  )
}

export default Join









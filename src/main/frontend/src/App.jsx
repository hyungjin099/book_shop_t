import { Route, Routes } from 'react-router-dom'
import BasicLayout from './components/layout/BasicLayout'
import ManagerLayout from './components/layout/ManagerLayout'
import Join from './pages/member/Join'
import './reset.css'
import { BiBook } from 'react-icons/bi'
import BookList from './pages/book/BookList'
import Login from './pages/member/Login'
import BookForm from './pages/book/BookForm'
import WebStorage from './study/WebStorage'
import { useState } from 'react'

function App() {
  
  console.log('app 다시 읽음');

  //로그인 정보를 저장하는 state 변수
  const [loginInfo, setLoginInfo] = useState({});


  return (
    <>
      <Routes>

        {/* Route를 아래와 같이 중복으로 사용하면 두 컴포넌트를 함게 띄울 수 있음 */}
        {/* 컴포넌트에 접근하는 url은 바깥 Route와 안쪽 Route의 path로 나열로 지정 */}
        {/* 단, 안쪽 Route의 path속성값은 '/'를 붙이지 않는다 */}
        {/* 바깥 컴포넌트에 <Outlet /> 컴포넌트를 사용하여 함께 열리는 컴포넌트의 위치를 지정한다 */}

        {/* 일반회원이 접근하는 페이지들 */}
        <Route path='/' element={ <BasicLayout setLoginInfo={setLoginInfo}/> }>

          {/* 웹스토리지 학습용 컴포넌트  */}
          <Route path='storage' element={ <WebStorage /> }/>

          {/* 도서 목록 페이지, URL : localhost:5173 */}
          <Route path='' element={ <BookList/> }/>

          {/* 회원 가입 페이지, URL : localhost:5173/join */}
          <Route path='join' element={ <Join /> }/>

          {/* 로그인 페이지, URL : localhost:5173/login */}
          <Route path='login' element={ <Login setLoginInfo={setLoginInfo} /> }/>
        
        </Route>

        {/* 매니저 권한의 회원이 접근하는 페이지들 */}
        <Route 
          path='/manage' 
          element={ <ManagerLayout setLoginInfo={setLoginInfo}/> 
        }>

          {/* 상품 등록 페이지, URL : localhost:5173/manage/book-form */}
          <Route path='book-form' element={ <BookForm /> }/>
          
        </Route> 

      </Routes>
    </>
  )
}

export default App



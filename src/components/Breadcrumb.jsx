import { useLocation,Link } from 'react-router-dom';
import React from 'react';

function Breadcrumb() {
  const { pathname } = useLocation();

  // 기존 path명을 /기준으로 배열분리
  const pathArr = pathname.split('/').map((path => path === '' ? 'HOME' : path.toUpperCase()));
  console.log(pathArr);

  return (
    <nav>
      {pathArr.map((path,idx)=>{
        return (
        // JSX의 frament로는 key를 적용할 수 없으므로
        // 아래와 같이 React.Fragment 형태로 출력 가능
        <React.Fragment key={idx}>
          {
            idx !== pathArr.length-1 
            // 현재 순번이 마지막이 아닐때 Link적용한 메뉴 출력
            ? <span><Link to={'/'+path.toLowerCase()}>{path}</Link></span> 
            // 현재 순번이 마지막일때 그냥 굵게만 텍스트 출력
            : <strong>{path}</strong>
          }
        </React.Fragment>
        )
      })}
    </nav>
  )
}

export default Breadcrumb


/*
  /members
  ['','members] => ['HOME' , 'MEMBERS]
  HOME > MEMBERS
  HOME(링크) > MEMBERS(텍스트)
*/
import { Link, useLocation } from "react-router-dom";
import pageData from "../data/pageData";

function Gnb() {
	const { pathname } = useLocation();
	// /members => members.split('/') = ['', 'members']
	return (
		<ul>
			{pageData.map(({path,name}, idx) => {
				return (
					!path.includes("/:") && (
						<li
							key={idx}
							className={
								//반복되는 메뉴명을 소문자 변경한 값과 현재활성화된 path명에서 /를 제외한 문자값이 동일하면
								//해당 메뉴에만 "on"클래스 추가해서 활성화 처리
								//className 속성에는 무조건 문자값이 들어와야 되므로 &&연산자를 쓰면 안된다.(boolean값 반환이유)
								pathname === path ? "on" : ""
							}>
							<Link key={idx} to={path}>
								{name}
							</Link>
						</li>
					)
				);
			})}
		</ul>
	);
}

export default Gnb;

import { Link, useLocation } from "react-router-dom";

function Gnb() {
  const { pathname } = useLocation();
	// /members => members.split('/') = ['', 'members']
	//메뉴 데이터 배열
	const menuData = [
		{ name: "MEMBERS" },
		{ name: "POSTS" },
		{ name: "GALLERY" },
		{ name: "YOUTUBE" },
		{ name: "CONTACT" },
		{ name: "JOIN" }
	];
	return (
		<ul>
			{menuData.map((data, idx) => {
				return (
					<li
						key={idx}
						className={
							//반복되는 메뉴명을 소문자 변경한 값과 현재활성화된 path명에서 /를 제외한 문자값이 동일하면
							//해당 메뉴에만 "on"클래스 추가해서 활성화 처리
							//className 속성에는 무조건 문자값이 들어와야 되므로 &&연산자를 쓰면 안된다.(boolean값 반환이유)
							pathname.split("/")[1] === data.name.toLocaleLowerCase() ? "on" : ""
						}>
						{/* <Link to={`/${data.name.toLowerCase()}`}> */}
						<Link key={idx} to={"/" + data.name.toLowerCase()}>
							{data.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default Gnb;

import Layout from "../components/Layout";
import { useState } from "react";

//리액트의 컴포넌트 단위의 개발이 효율적인 이유
//1. 기능별로 개발로직을 따로 관리 (로그인(유저정보), 주메뉴(메뉴정보), 게시판(게시글정보), 썸네일(이미지정보) )
//2. 데이터를 기반으로 데이터의 변경을 인지해서 리액트 자체적으로 자동 렌더링 (변경점 화면에 갱신)
//3. state라는 걸로 데이터를 관리, state전용 변경함수로만 데이터 변경가능 (중요한 데이터를 쉽게 변경치 않도록 강제)

function Members() {
	console.log("member render");
	const [Num, setNum] = useState(0);

	return (
		<Layout title={"Members"}>
			<h3 className="text-8xl">{Num}</h3>
			<button
				className="btn"
				onClick={() => setNum(Num + 1)}>
				+
			</button>
			<button
				className="btn"
				onClick={() => setNum(Num - 1)}>
				-
			</button>
		</Layout>
	);
}

export default Members;

import { useState } from "react";
import Layout from "../components/Layout";

function Members() {
	console.log("Members Render");
	//Members: 원본 배열 데이터
	const [Members, setMembers] = useState([
		{ name: "David", position: "President", pic: "david.jpg" },
		{ name: "Emily", position: "Vice President", pic: "emily.jpg" },
		{ name: "Emma", position: "UI Designer", pic: "emma.jpg" },
		{ name: "Julia", position: "Front-end Engineer", pic: "julia.jpg" },
		{ name: "Michael", position: "Back-end Engineer", pic: "michael.jpg" },
		{ name: "Peter", position: "Project Manager", pic: "peter.jpg" }
	]);

	//각 사용자 데이터를 관리자페이지처럼 직접 변경해야 하는 경우
	//변경할 원본 데이터가 너무 방대해서 통으로 복사해서 변경할 데이터를 만들기 어려운 경우
	//방법 : 각 데이터별로 이벤트 핸들러를 등록해서 해당 이벤트가 발생한 순번의 데이터만 변경하도록 처리
	const changeInfo = e => {
		//클릭한 버튼 요소의 부모에서 다시 자식요소중 name값이 mName인 input값을 가져옴
		const inputValue = e.target.parentElement.children.mName.value;
		//기존 state정보 DeepCopy
		const newMembers = [...Members];
		//복사된 배열값에서 data-index로 넘긴 순서정보값의 객체에서 name값을 위에서 구한 input정보로 변경
		newMembers[e.target.dataset.index].name = inputValue;
		//변경된 정보값을 통채로 setMembers로 state변경처리하고
		setMembers(newMembers);
		//기존 input요소의 값 비워줌
		e.target.parentElement.children.mName.value = "";
	};

	return (
		<Layout title={"MEMBERS"}>
			{Members.map(({ name, position, pic }, idx) => (
				<article key={idx} className="m-2 inline-block">
					<img src={"/" + pic} alt={name} className="w-24" />
					<h3>{name}</h3>
					<p>{position}</p>
					<input type="text" name="mName" className="border border-black" />
					<br />
					{/* 각 버튼 클릭시 changeInfo함수 호출, data-index속성에 현재 반복 순서정보 전달 */}
					<button className="btn text-xs" data-index={idx} onClick={changeInfo}>
						멤버 데이터 변경
					</button>
				</article>
			))}
		</Layout>
	);
}
export default Members;

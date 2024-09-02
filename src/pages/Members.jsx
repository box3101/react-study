import Layout from "../components/Layout";
import { useState, useEffect } from "react";

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

	//변경될 데이터가 자잘하게 여러개일때
	const newMembers = [
		{ name: "Tom", position: "President", pic: "david.jpg" },
		{ name: "Emily", position: "Vice President", pic: "emily.jpg" },
		{ name: "Emma", position: "UI Designer", pic: "emma.jpg" },
		{ name: "Julia", position: "Front-end Engineer", pic: "julia.jpg" },
		{ name: "Michael", position: "Back-end Engineer", pic: "michael.jpg" },
		{ name: "Peter", position: "Project Leader", pic: "peter.jpg" }
	];

	const changeMembers = () => {
		setMembers(newMembers);
	};

	return (
		<Layout title={"Members"}>
			<button className="btn" onClick={changeMembers}>
				멤버번경
			</button>
			<br />
			{Members.map(({ name, position, pic }, idx) => (
				<article key={idx} className="m-2 inline-block">
					<img src={"/" + pic} alt={name} className="w-24" />
					<h3>{name}</h3>
					<p>{position}</p>
				</article>
			))}
		</Layout>
	);
}

export default Members;

/*
	리액트에서 불변성 (immutable)
	-리액트에서 다루는 중요한 데이터는 모두 불변성을 유지해야됨
	-원본데이터를 훼손하지 않으면 복사본을 만들고 복사본 수정
	-리액트는 이전 원본 대비 복사본을 비교해서 변경사항이 있을때에만 화면을 재랜더링
	-원본이 사라지면 비교할 대상이 없기 때문에 화면 재렌더링이 일어나지 않음
	자바스크립트 엔진 : Memory Heap, CallStack (callback queue, event loop) + Web API (DOM, Ajax(HttpReques), setTimer)
	원시형자료 : String, Number, boolean, undefined
	메모리생성(callstack):값 (callstack)
	참조형자료 : Array, Object
	메모리생성(callstack): 값 (Memory Heap)
	원시형자료같은 경우는 값자체가 실제 물리적으로 담겨있음
	참조형자료 : 값의 참조위치값만 변수에 담겨있음
*/

import Layout from "../components/Layout";
import { useState } from "react";

function Members() {
	const [Members, setMembers] = useState([
		{ name: "David", position: "President", pic: "david.jpg" },
		{ name: "Emily", position: "Vice President", pic: "emily.jpg" },
		{ name: "Emma", position: "UI Designer", pic: "emma.jpg" },
		{ name: "Julia", position: "Front-end Engineer", pic: "julia.jpg" },
		{ name: "Michael", position: "Back-end Engineer", pic: "michael.jpg" },
		{ name: "Peter", position: "Project Manager", pic: "peter.jpg" }
	]);

	const [Num, setNum] = useState(0);

	//아래와 같이 원시형 자료값을 일반 변수에 값을 복사처리도 리액트가 변경점을 인지함
	const changeNum = () => {
		let NewNum = Num;
		NewNum = 3;
		setNum(NewNum);
	};

	//아래의 경우처럼 데이터를 state에 담아놓고 해당 값을 state변경함수로 변경했다고 하더라도
	//담겨있는 값이 참조형 자료이고 참조형 자료를 deep copy하지 않으면 불변성 유지가 안되므로 재랜더링 일어나지 않음
	const changeName = () => {
		//Members:참고링크1
		//NewMembers: 참고링크2
		//Mebers에 있는 참조링크1과 NewMembers에 있는 참조링크2는 메모리힙에 있는 같은 같은 데이터를 참조하고 있음 (Shalow Copy)
		//참조형 자료를 얕은 복사한 이후에 값을 변경하면 원본데이터가 훼손됨 (불변성 유지가 안됨)
		//리액트 입장에서는 원본이 사라졌기 때문에 비교대상이 사라져셔 화면을 재랜더링 할 수 없음
		//리액트에서 참조형자료는 전개연산자를 이용해서 deep copy한 이후에 수정후 사용
		//const NewMembers = Members;
		const NewMembers = [...Members]; //참조값이 아닌 원본값을 꺼내와서 새로운 배열에 담아주는 완전복사
		NewMembers[0].name = "Tom";
		console.log(NewMembers);
		setMembers(NewMembers);
	};

	return (
		<Layout title={"Members"}>
			<button className="btn" onClick={changeName}>
				대표이름 변경
			</button>

			<h1>{Num}</h1>
			<button className="btn" onClick={changeNum}>
				숫자 변경
			</button>

			{Members.map(({ name, position, pic }, idx) => (
				<article key={idx}>
					<img src={"/" + pic} alt={name} />
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

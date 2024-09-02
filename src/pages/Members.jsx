import Layout from "../components/Layout";
import { useState, useEffect } from "react";

function Members() {
	const [Members, setMembers] = useState([]);

	//useEffect(콜백함수, 의존성배열)
	//useEffect호출시 의존성배열이 비어있으면
	//같이 인수로 전달된 콜백함수는 컴포넌트 마운트시 딱 한번만 실행됨
	useEffect(() => {
		fetch("/members.json")
			.then(data => data.json())
			.then(data => {
				console.log(data.members);
				setMembers(data.members);
			});
	}, []);

	//클라이언트단에서 Mebembers컴포넌트 함수가 호출되자마자 web api로 서버 데이터 가져옴
	//아래와 같은 로직으로는 컴포넌트가 무한호출되는 문제 발생
	//무한로딩이 일어나름 흐름
	//1. 빈배열 state값을 가지고 있는 컴포넌트함수 호출됨
	//2. 호출되자마자 fetch로 서버쪽 데이터 요청후 기존 state값 변경처리
	//3. 리액트는 Members라는 state가 변경되었기 때문에 다시 함수 재호출
	//4. 1,2,3단계가 무한 반복됨
	//해결 방법: 컴포넌트가 처음 렌더링(호출)되었을때에만 fetch가 실행되도록 강제처리

	//컴포넌트의 생명주기관리 (Life Cycle) (생성 Mount, 변경 (ReRender), 소멸 UnMount)
	//리액트의 useEffect라는 hook을 통해서 컴포넌트의 3가지 생명주기에 따른 로직을 설정

	// fetch("/members.json")
	// 	.then(data => data.json())
	// 	.then(data => {
	// 		console.log(data.members);
	// 		setMembers(data.members);
	// 	});

	return (
		<Layout title={"Members"}>
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

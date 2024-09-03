/*
	Mount : 화면에 첫 랜더링
	Update : 다시 랜더링
	Unmount : 화면에서 사라질 때
	useEffect(()=>{ // 작업내용 })

	두가지 형태
	1. useEffect(()=>{ // 작업 }); 
	콜백함수만 => 랜더링 될때 마다 실행
	2. useEffect(()=>{ // 작업 } , [value]); 
	콜백함수, 배열 => 화면에 첫 랜더링이 될때 실행 + value 값일 바뀔때 실행 , []이면 화면에 첫 랜더링 될때만 실행

	cleanUp 정리
	useEffect(()=>{ // 구독} return() => { // 구독해지 }),[]);
	해당 함수가 Unmount 될 때 
*/
import { useState, useEffect } from "react";

function App() {
	const [count, setCount] = useState(1);
	const [name, setName] = useState("");

	const handleInputChange = e => {
		setName(e.target.value);
	};
	const handleCountUpdate = () => {
		setCount(count + 1);
	};

	/* 
	 랜더링(컴포넌트 재호출) 될때마다 매번 실행됨
	 매번 랜더링 될때마다 실행되면 비효율적이므로 낭비가 심하므로 count 값이 바뀔때만 랜더링 되게
	*/
	useEffect(() => {
		console.log("랜더링");
	}, [count]);

	return (
		<>
			<button onClick={handleCountUpdate}>update</button>
			<span>count : {count}</span>
			<input type="text" value={name} onChange={handleInputChange}></input>
			<span>name : {name}</span>
		</>
	);
}

export default App;

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
import { useState } from "react";

function App() {
	const [count, setCount] = useState(1);

	const handleCountUpdate = () => {
		setCount(count + 1);
	};

	return (
		<>
			<button onClick={handleCountUpdate}>update</button>
			<span>count : {count}</span>
		</>
	);
}

export default App;

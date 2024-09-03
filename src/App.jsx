/*
	hook : 리액트 16.4 버전부터 새로나온 함수형 컴포넌트에서 사용할 수 있는 전용함수
	사용규칙 : use로 함수이름 시작
	사용규칙 : 컴포넌트안에서만 호출가능 (특정 핸들러함수 안쪽에서는 호출불가)
	useState() : state라는 리액트의 변경점을 야기할 중요한 정보값을 담을 그릇 state생성, state값을 변경도 가능
	state를 통해서 번거롭게 데이터를 변경해야지만 재랜더링 시키는 이유는 
	불필요하게 컴포넌트를 재호출하지 않음으로서 연산 비용을 최소화
	리액트에서 변경점을 야기시키는 중요한 정보값을 효율적으로 관리하기 위함
*/
import { useState } from "react";

function App() {
	console.log("app rendered");
	// [state, state변경함수] = useState(state에 담길 호출 값)
	let [result, setResult] = useState(0);

	const plus = num => {
		console.log(result + num);
		setResult(result + num);
	};

	return (
		<>
			<h1>{result}</h1>
			<button
				onClick={() => {
					plus(2);
				}}>
				+
			</button>
		</>
	);
}

export default App;

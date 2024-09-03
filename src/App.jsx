function App() {
	// 리액트 컴포넌트 새로운 화면을 출력을 하기 위해서는
	// 해당 컴포넌트 재호출되서 새로운 변경점이 반영된 JSX를 반환 (ReRender)

	/* 
	컴포넌트에서 사용자 이벤트에 의해서 새로운 변경점이 생기고 
	그 변경점으로 인해서 컴포넌트를 재랜더링하기 위해서는 변경을 담당하는 중요한 정보값을 일반 변수에 담으면 안됨
	이유 - 리액트 컴포넌트는 지역변수값이 변경되는 걸로는 컴포넌트의 정보값이 바뀌었다고 인지하지 않음
	컴포넌트를 재호출할만큼 중요한 데이터인지 아닌지를 구분하기 위해서 state라는 특별한 정보값이 변경되었을 때에만 재 호출
	*/
	let result = 0;
	const plus = num => {
		result += num;
		console.log(result);
	};

	return (
		<>
			<h1>{result}</h1>
			<button
				onClick={() => {
					plus(1);
				}}>
				+
			</button>
		</>
	);
}

export default App;

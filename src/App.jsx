function App() {
	// 함수를 만드는 기본(인수가 필요하지 않을때)
	const handelClick = text => {
		console.log(text);
	};

	// 함수를 만드는 기본(인수가 필요할때)
	const handelClick2 = text => {
		console.log(text);
	};

	return (
		<>
			{/* 인수가 필요하지 않을때 */}
			<h1 onClick={handelClick}>hello</h1>
			{/* 인수가 필요할때 */}
			<h1 onClick={() => handelClick2("abc")}>hello</h1>
		</>
	);
}

export default App;

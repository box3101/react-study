import { useState, useRef } from "react";

const boxStyle = {
	width: 200,
	height: 200,
	backgroundColor: "aqua",
	marginTop: 50,
	transitionDuration: "0.5s"
};

function App() {
	const box = useRef(null);
	const deg = useRef(45);
	let [Num, setNum] = useState(0);

	console.log(Num);
	console.log(deg);

	const handleLeft = () => {
		setNum(--Num);
		box.current.style.transform = `rotate(${deg.current * Num}deg)`
	}

	const handleRight = () => {
		setNum(++Num);
		box.current.style.transform = `rotate(${deg.current * Num}deg)`
	}

	return (
		<>
			<div className="wrap">
				<button onClick={handleLeft}>left</button>
				<button onClick={handleRight}>right</button>
				<article style={boxStyle} ref={box}></article>
			</div>
		</>
	);
}

export default App;

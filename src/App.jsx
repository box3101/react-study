import { useState, useEffect } from "react";
import Timer from "./components/Timer";

function App() {
	const [showTimer, setShowTimer] = useState(false);
	return (
		<>
			{showTimer && <Timer />}
			<button
				onClick={() => {
					setShowTimer(!showTimer);
				}}>
				Toggle timer
			</button>
		</>
	);
}

export default App;

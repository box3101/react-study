import React, { useEffect } from "react";

function Timer() {
	useEffect(() => {
		// 타이머를 다 쓰고 나서 종료해야함
		const timer = setInterval(() => {
			console.log("타이머 돌아가는중");
		}, 1000);

		// ... 정리작업 타이머 컴포넌트가 언마운트 될때(화면에서 사라질때)
		return () => {
			clearInterval(timer);
			console.log("타이머가 종료");
		};
	}, []);

	return (
		<div>
			<span>타이머를 시작합니다. 콘솔을 보세요</span>
		</div>
	);
}

export default Timer;

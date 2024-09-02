import Hero from "../components/Hero";

function Home() {
	// Layout 컴포넌트 호출 뒤, 자식으로 컨텐츠 전달
	// 해당 내용은 Layout안쪽에서 props.children으로 전달됨
	return (
		<>
			<Hero />
		</>
	);
}

export default Home;

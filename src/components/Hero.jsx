//import vid from "../assets/vidBg.mp4";
/*
  이미지, 영상같은 소스 자료들 호출 방법
  1. public : 소스를 가공하지 않고 리액트 컴포넌트가 최종 빌드된 이후에 서버쪽에서 데이터 호출
  2. src > assets  : 소스가 리액트 컴포넌트 빌드시 같이 용량이 최적화되어 빌드됨, 초반에반 데이터 호출하고 이후부터는 서버요청없이 클라이언트 단에서 캐싱된 데이터를 계속해서 재활용
  경로설정에서 절대경로 /
  - 실 서버상 루트경로해서 제일 가까운 path경로를 찾음
  - components/abc/bbc/내가원하는 파일 /bbc (상위경로 무시하고 무조건 루트해서 매칭되는 해당 경로 바로 찾음)
  - 최종 컴포넌트가 빌드된 이후에 브라우저가 인식하는 패스 경로
  상대경로 ../, ./
  - 컴포넌트가 빌드되기 전 개발단에서 사용되는 경로 
*/

function Hero() {
	return (
		<section>
			<video src="/vidBg.mp4" loop muted autoPlay />
		</section>
	);
}

export default Hero;

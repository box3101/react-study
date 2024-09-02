import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

function YoutubeDetail() {
	// 동적 라우터를 통해서 paramer로 넘긴값을  객체형태로 전달 받은 뒤 비구조화 할당
	const { id } = useParams();
	return (
		<Layout title={"YOUTUBE DETAIL"}>
			<p>{`YoutubeDetail ${id}`}</p>
		</Layout>
	);
}

export default YoutubeDetail;

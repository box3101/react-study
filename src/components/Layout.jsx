import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";

function Layout({ title, children }) {
	const { pathname } = useLocation();
	return (
		<main>
			{/* 간단한건 prop 긴거는 children 으로 넘김 */}
			<h2>{title}</h2>
			{pathname !== "/" && <Breadcrumb />}
			<section id={title.toLowerCase()}>{children}</section>
		</main>
	);
}

export default Layout;

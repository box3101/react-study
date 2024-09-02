import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";

function Layout({ title, children }) {
	const { pathname } = useLocation();
	return (
		<main className="px-[10vw] py-[20vh]">
			<h2 className="font-raleway mb-5 text-[5vw] font-thin">
				{title}
			</h2>
			{pathname !== "/" && <Breadcrumb />}
			<section id={title.toLowerCase()}>{children}</section>
		</main>
	);
}

export default Layout;

import Breadcrumb from "./Breadcrumb";

function Layout({ title, children }) {
	return (
		<main>
			{/* 간단한건 prop 긴거는 children 으로 넘김 */}
			<h2>{title}</h2>
			<Breadcrumb />
			<section id={title.toLowerCase()}>{children}</section>
		</main>
	);
}

export default Layout;

import Gnb from "./Gnb";
import Util from "./Util";
function Header() {
	return (
		<header>
			<h1 className="max_md:text-blue-500 max_sm:text-pink-500">
				<a href="/">DCODELAB</a>
			</h1>

			<Gnb />
			<Util />
		</header>
	);
}

export default Header;

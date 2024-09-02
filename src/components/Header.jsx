import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import Util from "./Util";
function Header() {
	return (
		<header>
			<h1 className="font-orbitron text-2xl font-semibold drop-shadow-md">
				<Link to="/">DCODELAB</Link>
			</h1>

			<nav className="flex items-center gap-40">
				<Gnb />
				<Util />
			</nav>
		</header>
	);
}

export default Header;

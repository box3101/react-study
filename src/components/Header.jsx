import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import Util from "./Util";
function Header() {
	return (
		<header>
			<h1 className="text-2xl font-semibold drop-shadow-md">
				<Link to="/">DCODELAB</Link>
			</h1>

			<Gnb />
			<Util />
		</header>
	);
}

export default Header;

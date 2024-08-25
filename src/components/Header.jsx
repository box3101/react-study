import Gnb from "./Gnb";
import Util
 from "./Util";
function Header() {
	return (
		<header>
			<h1>
				<a href="/">DCODELAB</a>
			</h1>

      <Gnb />
      <Util />
		</header>
	);
}

export default Header;

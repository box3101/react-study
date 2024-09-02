import {
	FaFacebook,
	FaGoogle,
	FaFlickr
} from "react-icons/fa";

function Util() {
	return (
		<ul className="max_2xl:hidden flex gap-6 text-sm">
			<li>
				<a href="https://www.facebook.com">
					<FaFacebook />
				</a>
			</li>
			<li>
				<a href="https://www.google.com">
					<FaGoogle />
				</a>
			</li>
			<li>
				<a href="https://www.flickr.com">
					<FaFlickr />
				</a>
			</li>
		</ul>
	);
}

export default Util;

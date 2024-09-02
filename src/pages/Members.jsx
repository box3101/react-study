import Layout from "../components/Layout";
import { useState } from "react";

function Members() {
	const [Members, setMembers] = useState([
		{ name: "David", position: "President", pic: "david.jpg" },
		{ name: "Emily", position: "Vice President", pic: "emily.jpg" },
		{ name: "Emma", position: "UI Designer", pic: "emma.jpg" },
		{ name: "Julia", position: "Front-end Engineer", pic: "julia.jpg" },
		{ name: "Michael", position: "Back-end Engineer", pic: "michael.jpg" },
		{ name: "Peter", position: "Project Manager", pic: "peter.jpg" }
	]);

	return (
		<Layout title={"Members"}>
			{Members.map(({ name, position, pic }, idx) => (
				<article key={idx}>
					<img src={"/" + pic} alt={name} />
					<h3>{name}</h3>
					<p>{position}</p>
				</article>
			))}
		</Layout>
	);
}

export default Members;

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Posts from "./pages/Posts";
import Gallery from "./pages/Gallery";
import Youtube from "./pages/Youtube";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/members" element={<Members />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/youtube" element={<Youtube />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/join" element={<Join />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;

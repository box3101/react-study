import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import pageData from "./data/pageData";

function App() {
	console.log(pageData);
	return (
		<>
			<Header />

			<Routes>
				{
					pageData.map((data,idx)=>{
						return(
							<Route path={data.path} element={<data.comp/>} />
						)
					})
				}
			</Routes>

			<Footer />
		</>
	);
}

export default App;

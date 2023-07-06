import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
	const navigate = useNavigate();
	const productNavigationButtonHandler = () => {
		navigate("products");
	}
	return (
		<>
			<h1>My Homepage</h1>
			<button onClick={productNavigationButtonHandler}>Navigate To Products</button>
		</>
	)
}

export default Homepage;
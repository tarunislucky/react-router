import { Fragment } from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
	return (
		<>
			<h1>My Homepage</h1>
			<Link to="/products">Products</Link>
		</>
	)
}

export default Homepage;
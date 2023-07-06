import { Fragment } from "react";
import { Link } from "react-router-dom";
const Products = () => {
	return (
		<>
			<h1>The Products page</h1>
			<ul>
				<li><Link to="laptop">Laptop</Link></li>
				<li><Link to="mobile">Mobile</Link></li>
			</ul>
		</>
	)
}

export default Products;
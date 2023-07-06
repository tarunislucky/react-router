import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
	const param = useParams();

	return (
		<>
			<h1>Product deails page</h1>
			<p>It's a {param.id}</p>
			<Link to=".." relative="path">Back</Link>
		</>
	)
}
export default ProductDetails;
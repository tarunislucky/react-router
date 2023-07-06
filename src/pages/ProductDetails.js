import { useParams } from "react-router-dom";

const ProductDetails = () => {
	const param = useParams();

	return (
		<>
			<h1>Product deails page</h1>
			<p>It's a {param.id}</p>
		</>
	)
}
export default ProductDetails;
import { useDispatch } from "react-redux";
import allActions from "../store/all-actions";
import { formatMoney } from "./utils";
import productsInfo from "./productInfo";

const Products = () => {
    const dispatch = useDispatch();

    return (
        <>
            <h3>Products</h3>
            <div className="row mx-2">
                {productsInfo.map((product) => {
                    return (
                        <div key={product.id} className="col-4 mb-5">
                            <h6>{product.title.substring(0, 55) + "..."}</h6>
                            <img src={product.image} alt="product" style={{ height: "100px", maxWidth: "150px", objectFit: "cover" }} />
                            <p>{formatMoney(product.price)}</p>
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => {
                                    dispatch(allActions.cartActions.addItem(product));
                                }}
                            >
                                Add to cart
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Products;

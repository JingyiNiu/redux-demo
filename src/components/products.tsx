import { useDispatch, useSelector } from "react-redux";
import allActions from "../store/all-actions";
import { formatMoney } from "./utils";
import productsInfo from "./productInfo";

const Products = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state: any) => state.cartReducer);

    const getItemQuantityInCart = (id: number) => {
        const itemInCart = cartItems.find((item: any) => item.id === id);
        if (itemInCart) {
            return itemInCart.quantity;
        } else {
            return 0;
        }
    };

    const handleQuantityDecrement = (product: any) => {
        if (getItemQuantityInCart(product.id) === 1) {
            dispatch(allActions.cartActions.removeItem(product));
        } else {
            dispatch(allActions.cartActions.quantityDecrement(product));
        }
    };

    const handleQuantityIncrement = (product: any) => {
        dispatch(allActions.cartActions.quantityIncrement(product));
    };

    const handleAddItem = (product: any) => {
        dispatch(allActions.cartActions.addItem(product));
    };

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
                            {getItemQuantityInCart(product.id) ? (
                                <>
                                    <button className="btn btn-outline-secondary me-1" onClick={() => handleQuantityDecrement(product)}>
                                        -
                                    </button>
                                    {getItemQuantityInCart(product.id)}
                                    <button className="btn btn-outline-secondary ms-1" onClick={() => handleQuantityIncrement(product)}>
                                        +
                                    </button>
                                </>
                            ) : (
                                <button className="btn btn-outline-secondary" onClick={() => handleAddItem(product)}>
                                    Add to cart
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Products;

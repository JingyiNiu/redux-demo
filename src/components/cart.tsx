import { useSelector } from "react-redux";

const Cart = () => {
    const { itemCount } = useSelector((state: any) => state.cartReducer);
    return (
        <>
            <h3>Cart</h3>
            <div className="mx-2">{itemCount ? itemCount + " items in cart" : "Empty Cart"}</div>
        </>
    );
};

export default Cart;

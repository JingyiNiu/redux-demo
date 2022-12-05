import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {
    const { cartItems, totalPrice } = useSelector((state: any) => state.cartReducer);
    const dispatch = useDispatch();

    return (
        <>
            <h3>Checkout</h3>
            <div className="mx-2">
                {cartItems.length ? (
                    <>
                        {cartItems.map((item: any) => {
                            return (
                                <div key={item.id} className="row">
                                    <div className="col-6">
                                        <div className="d-flex">
                                            <img src={item.image} alt={item.title} style={{ height: "20px", maxWidth: "20px", objectFit: "contain" }} className="me-2" />
                                            <h6>{item.title.substring(0, 40) + "..."}</h6>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-sm btn-outline-secondary me-2">-</button>
                                            {item.quantity}
                                            <button className="btn btn-sm btn-outline-secondary ms-2">+</button>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <p>${item.price}</p>
                                    </div>
                                    <div className="col-1">${item.quantity * item.price}</div>
                                    <div className="col-1 text-end">
                                        <button className="btn btn-sm btn-danger">X</button>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="text-end">
                            <h3>Total: ${totalPrice}</h3>
                        </div>
                    </>
                ) : (
                    "Empty Cart"
                )}
            </div>
        </>
    );
};

export default Checkout;

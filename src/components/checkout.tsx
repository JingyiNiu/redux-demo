import { useSelector, useDispatch } from "react-redux";
import allActions from "../store/all-actions";
import { formatMoney } from "./utils";

const Checkout = () => {
    const { cartItems } = useSelector((state: any) => state.cartReducer);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        const totalPrice = cartItems.reduce((acc:number, item:any)=>{
            return acc + item.price * item.quantity
        }, 0)
        return totalPrice
    }

    console.log(getTotalPrice())

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
                                            <button className="btn btn-sm btn-outline-secondary me-2" onClick={()=>dispatch(allActions.cartActions.quantityDecrement(item))}>-</button>
                                            {item.quantity}
                                            <button className="btn btn-sm btn-outline-secondary ms-2" onClick={()=>dispatch(allActions.cartActions.quantityIncrement(item))}>+</button>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <p>${formatMoney(item.price)}</p>
                                    </div>
                                    <div className="col-1">{formatMoney(item.quantity * item.price)}</div>
                                    <div className="col-1 text-end">
                                        <button className="btn btn-sm btn-danger" onClick={()=>dispatch(allActions.cartActions.removeItem(item))}>X</button>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="text-end">
                            <h3>Total: {formatMoney(getTotalPrice())}</h3>
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

import { connect } from "react-redux";
import "./App.css";

function App(props: any) {
    const { count } = props;

    const incrementCount = () => {
        props.increment();
    };

    const decrementCount = () => {
        props.decrement();
    };

    const resetCount = () => {
        props.reset();
    };

    return (
        <>
            <h3>{count}</h3>
            <button onClick={incrementCount}>increment</button>
            <button onClick={decrementCount}>decrement</button>
            <button onClick={resetCount}>reset</button>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return { count: state.counterReducer };
};

const mapDispatchToProps = (dispatch: any) => {
    return { increment: () => dispatch({ type: "INCREMENT" }), decrement: () => dispatch({ type: "DECREMENT" }), reset: () => dispatch({ type: "RESET" }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

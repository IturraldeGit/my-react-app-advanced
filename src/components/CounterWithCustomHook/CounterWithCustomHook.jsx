import useCounter from '../../hooks/useCounter';

const CounterWithCustomHook = () => {
    const { count, increment, decrement, reset } = useCounter(0);
    
    return (
        <div>
            <h1>Counter with Custom Hook: {count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}

export default CounterWithCustomHook;
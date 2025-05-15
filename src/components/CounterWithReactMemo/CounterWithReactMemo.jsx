import React, { useCallback, useState, useMemo } from 'react'

const Child = React.memo(({ counter }) => {
    console.log('Child component rendered');
    return (
        <div>
            <h2>Contador: {counter}</h2>
        </div>
    )
})

// Uncomment the following code to see the difference between using React.memo and not using it
// const Child = ({ counter }) => {
//     console.log('Child component rendered');
//     return (
//         <div>
//             <h2>Child Counter: {counter}</h2>
//         </div>
//     )
// }

function ExpensiveCalculation({ number }) {
    const result = useMemo(() => {
        console.log("Calculating...");
        return number * 2;
    }, [number]);
    return <p>Result: {result}</p>;
}

function CounterWithReactMemo() {
    const [counter, setCounter] = useState(0);
    const [parentCounter, setParentCounter] = useState(false);
    console.log('Parent component rendered');

    const increment = useCallback(() => {
        setCounter(previewsValue => previewsValue + 1);
    }, []);

    function toggleParentCounter() {
        setParentCounter(previewsValue => previewsValue + 1);
    }

    return (
        <div>
            <Child counter={counter} />
            <button 
            onClick = {increment}
            >
                Increment Child
            </button> 

            <button 
            onClick = {toggleParentCounter}
            >
                Increment Parent
            </button>
            <div>
                <h2>
                    Parent Counter : {parentCounter}
                </h2>
            </div>

            <ExpensiveCalculation number={counter} />
        </div>
    )
}

export default CounterWithReactMemo;
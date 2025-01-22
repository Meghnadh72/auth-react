/* 
Create a React component where you have two buttons:
One button that increments a counter by 1.
Another button that updates the counter to 10.
When you click the "Increment" button, the counter should increase by 1.
When you click the "Set to 10" button, it should set the counter to 10.
Log the counter state immediately after calling the setState for both buttons to see that the update doesn't happen immediately.
Observe the output in the console for both updates.
*/

import { useState, useEffect } from "react";
import RandomUserComponent from "../APIIntegration";

const AsyncStateTestComponent = () => {
    const [counter, setCounter] = useState(0);

    const incrementByOne = () => {
        setCounter(prevValue => prevValue + 1);
        console.log(counter);
    }

    const addTen = () => {
        setCounter(prevValue => prevValue + 10);
        console.log(counter);
    }

    useEffect(() => {
        console.log("Counter has been updated:", counter);
      }, [counter]);

    return (<>
        <button onClick={() => incrementByOne()}>Add One</button>
        <button onClick={() => addTen()}> Add Ten</button>
        Counter Value : {counter}
        <RandomUserComponent/>
    </>)
}

export default AsyncStateTestComponent;
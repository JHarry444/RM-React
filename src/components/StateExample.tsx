import { useState } from "react";
import CounterDate from "./CounterDate";

function StateExample() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>State</h1>
            <section>
                <h2>Counter</h2>
                <input type="number" min={0} readOnly value={count} />
                <button onClick={() => setCount(count + 1)}>+1</button>
            </section>
            <CounterDate />
        </>
    );
}

export default StateExample;
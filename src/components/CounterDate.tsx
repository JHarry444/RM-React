import { memo } from "react";

const CounterDate = memo(function () {
    return (
        <footer>{new Date().toISOString()}</footer>

    )
});

export default CounterDate;
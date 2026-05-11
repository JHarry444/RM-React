import { useState } from "react";
import Trainers from "./Trainers";

function TrainerContainer() {
    const [show, setShow] = useState(true);
    return (
        <>
            <h2>Trainer Container</h2>
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Trainers</button>
            {show && <Trainers />}
        </>
    );
}

export default TrainerContainer;
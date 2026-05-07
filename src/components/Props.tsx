import Trainer from "./Trainer";

function Props() {
    return (
        <section>
            <h2>Props</h2>
            <Trainer name="JH" age={32} specialty="Java" />
            <Trainer name="CG" age={33} specialty="WEB" />
            <Trainer name="MS" age={45} specialty="ORACLE" />
            {
                Trainer({ name: "MS", age: 45, specialty: "ORACLE" })
            }
            <Trainer name="PB" age={28} />
        </section>
    );
}

export default Props;
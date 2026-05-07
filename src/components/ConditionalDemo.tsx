import Conditional from "./Conditional";

function ConditionalDemo() {
    return (
        <section>
            <h2>Conditional Rendering</h2>
            <Conditional bool={true} />
            <Conditional bool={false} />
        </section>
    );
}

export default ConditionalDemo;
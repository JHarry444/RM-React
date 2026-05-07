function Conditional({ bool }: { bool: boolean }) {

    // if (bool) {
    //     return <p>This will render if the condition is true</p>;
    // } else {
    //     return <p>This will render if the condition is false</p>;
    // }

    return (
        <p>This will render if the condition is {bool ? "true" : "false"}</p>
    );
}

export default Conditional;
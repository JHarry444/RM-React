import Input from "./Input";
import MyList from "./MyList";

function Components() {

    function add(a: number, b: number) {
        return a + b;
    }
    return (
        <>
            {/* In JSX/TSX you can embed expressions using curly braces */}
            <p>{`2 + 3 = ${add(2, 3)}`}</p>
            <p>{`3 + 2 = ${add(3, 2)}`}</p>
            <p>{`4 + 1 = ${add(4, 1)}`}</p>
            <p>1 + 1</p>
            <p>{1 + 1}</p>

            <section>
                <h2>Custom components</h2>
                <input type="text" />
                <Input />
                <MyList  />
            </section>
        </>
    );
}

export default Components;
import Input from "./components/Input";
import MyList from "./components/MyList";
import Trainer from "./components/Trainer";

function App() {

  function add(a: number, b: number) {
    return a + b;
  }


  return (
    // <> is a React Fragment, it allows us to return multiple 
    // elements without adding an extra node to the DOM
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
        <MyList />
      </section>

      <section>
        <h2>Props</h2>
        <Trainer name="JH" age={32} specialty="Java" />
        <Trainer name="CG" age={33} specialty="WEB" />
        <Trainer name="MS" age={45} specialty="ORACLE" />
        {
          Trainer({name: "MS", age: 45, specialty: "ORACLE"})
        }

      </section>

    </>
  )
}

export default App

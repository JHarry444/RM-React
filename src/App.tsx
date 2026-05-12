import { Route, BrowserRouter as Router, Routes } from "react-router";
import ConditionalDemo from "./components/ConditionalDemo";
import Components from "./components/Components";
import Props from "./components/Props";
import External from "./components/External";
import Navbar from "./components/NavBar";
import EventHandling from "./components/EventHandling";
import StateExample from "./components/StateExample";
import TrainerContainer from "./components/lifting-state/TrainerContainer";
import ThemeProvider from "./context/ThemeContext";
import MyList from "./components/MyList";
import { useState } from "react";


function App() {

  const [number, setNumber] = useState(1);

  return (
    // <> is a React Fragment, it allows us to return multiple 
    // elements without adding an extra node to the DOM
    <Router>
      {/* makes the theme value available to all components under this provider */}
      <ThemeProvider>
        <Navbar />
        <Routes>
          {/* if (url === '/demo') return (<p>This is a demo page</p>); */}
          <Route path="/demo" element={<p>This is a demo page</p>} />
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/components" element={<Components />} />
          <Route path="/conditional" element={<ConditionalDemo />} />
          <Route path="/props" element={<Props />} />
          <Route path="/external" element={<External />} />
          <Route path="/events" element={<EventHandling />} />
          <Route path="/state" element={<StateExample />} />
          <Route path="/lifting" element={<TrainerContainer />} />
        </Routes>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <table>
          <thead>
            <tr>
              <th>COL 1</th>
              <th>COL 2</th>
              <th>COL 3</th>
              <th>COL 4</th>
              <th>COL 5</th>
              <th>COL 6</th>
              <th>COL 7</th>
              <th>COL 8</th>
              <th>COL 9</th>
              <th>COL 10</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: number }, (_, i) => (
              <tr key={i}>
                <td>COL 1 ({i + 1})</td>
                <td>COL 2 ({i + 1})</td>
                <td>COL 3 ({i + 1})</td>
                <td>COL 4 ({i + 1})</td>
                <td>COL 5 ({i + 1})</td>
                <td>COL 6 ({i + 1})</td>
                <td>COL 7 ({i + 1})</td>
                <td>COL 8 ({i + 1})</td>
                <td>COL 9 ({i + 1})</td>
                <td>COL 10 ({i + 1})</td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer>{new Date().toISOString()}</footer>
      </ThemeProvider>
    </Router>
  );
}

export default App

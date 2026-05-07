import { Route, BrowserRouter as Router, Routes } from "react-router";
import ConditionalDemo from "./components/ConditionalDemo";
import Components from "./components/Components";
import Props from "./components/Props";
import External from "./components/External";
import Navbar from "./components/NavBar";

function App() {



  return (
    // <> is a React Fragment, it allows us to return multiple 
    // elements without adding an extra node to the DOM
    <Router>
      <Navbar/>
      <Routes>
        {/* if (url === '/demo') return (<p>This is a demo page</p>); */}
        <Route path="/demo" element={<p>This is a demo page</p>} />
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/components" element={<Components />} />
        <Route path="/conditional" element={<ConditionalDemo />} />
        <Route path="/props" element={<Props />} />
        <Route path="/external" element={<External />} />
      </Routes>

    </Router>
  );
}

export default App

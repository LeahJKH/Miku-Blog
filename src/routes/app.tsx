import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About/AboutPage";
import Error from "./Error/Error";
import Links from "./Links/LinkPage";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About/" element={<About />} />
          <Route path="Links/" element={<Links />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;

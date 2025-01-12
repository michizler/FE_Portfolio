import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </Router>
  );
}

export default App;

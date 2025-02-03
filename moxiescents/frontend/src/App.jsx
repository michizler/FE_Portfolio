import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Aboutpage from "./pages/Aboutpage";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import SuccessPage from "./pages/Success";


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  </Router>
  );
}

export default App;

import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import BookItem from "./BookItem";
import Manhwalist from "./Manhwalist";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="Home">Home</Link>
        <Link to="BookItem">Books</Link>
        <Link to="Manhwalist">Manhwalist</Link>
      </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="BookItem" element={<BookItem />} />
        <Route path="Manhwalist" element={<Manhwalist />} />
      </Routes>
    </div>
  );
}

export default App;

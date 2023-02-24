import { ActionButton } from "./components/ActionButton";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import { BookCreate } from "./pages/BookCreate";
import { Pokemon } from "./pages/Pokemon";

const App = () => { 
  return (
    <BrowserRouter>
      <h1>react app</h1>
      <ul>
        <li>
          <Link to="/omikuji">おみくじ</Link>
        </li>
        <li>
          <Link to="/janken">じゃんけん</Link>
        </li>
         <li>
          <Link to="/book-create">投稿する</Link>
        </li>
        <li>
          <Link to="/pokemon">ポケモンを探す</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/book-create" element={<BookCreate />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
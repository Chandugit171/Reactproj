import Home from './Home';
import Blog from './Blog';
import Cont from './Cont';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Navbar = () => {
  
    return (
<div>

    
    <BrowserRouter>
    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/blog'} className="nav-link">Blog</Link></li>
          <li><Link to={'/cont'} className="nav-link">Cont</Link></li>
        </ul>
        </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/cont" element={<Cont />} />
  </Routes>
</BrowserRouter>
</div>
       





    );
}
 
export default Navbar;

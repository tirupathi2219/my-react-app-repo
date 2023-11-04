import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;

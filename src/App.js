import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <h1>App</h1>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </div>
  );
}

export default App;

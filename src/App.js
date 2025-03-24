import { Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>test link</div>
      <button>
        <Link to="/users">Go to user page</Link>
      </button>
      <button>
        <Link to="/admins">Go to Admin page</Link>
      </button>
    </div>
  );
};
export default App;

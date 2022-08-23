import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import FontColorChanger from "./components/FontColorChanger";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <FontColorChanger />
    </div>
  );
}

export default App;
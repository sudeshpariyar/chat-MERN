import Register from "./scenes/register";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;
  return (
    <div className="">
      <>
        <Register />
      </>
    </div>
  );
}

export default App;

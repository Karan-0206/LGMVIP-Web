import "./App.css";
import { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/home/Home";
import Loader from "./Components/loader/Loader";
import Card from "./Components/card/Card";

const link = "https://reqres.in/api/users?page=1";
function App() {
  const [users, setUsers] = useState([]);
  const [Click, setClick] = useState(false);
  const [Fetch, setFetch] = useState(false);

  const fetchUser = async () => {
    setClick(true);
    await fetch(link)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.data);
        setInterval(() => {
          setFetch(true);
        }, 2000);
      });
  };
  return (
    <div className="App">
      <Navbar getUser={fetchUser} />
      {Click ? (
        Fetch ? (
          <Card person={users} />
        ) : (
          <Loader />
        )
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;

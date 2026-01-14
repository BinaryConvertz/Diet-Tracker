import axios from "axios";
import Header from "./Components/Header";
import { useEffect, useState } from "react";

const App = () => {
  const Title = "Diet Tracker";

  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/").then((e) => {
      setData(e.data);
    });
  });

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <h2 className="text-2xl mt-40 font-bold text-center text-white">
          Welcome to {Title}
        </h2>
        <h2 className="text-xl font-bold text-center tracking-wider font-sans">
          Welcome To {data}
        </h2>
      </div>
    </>
  );
};

export default App;

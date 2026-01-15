import axios from "axios";
import Header from "./Header";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import AboutUsComponent from "./AboutUsComponent";

const Home = () => {
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
        <h2 className="text-xl relative top-55 font-bold text-center tracking-wider font-sans">
          Welcome To {data}
        </h2>

        <AboutUsComponent />
      </div>

      <Footer />
    </>
  );
};

export default Home;

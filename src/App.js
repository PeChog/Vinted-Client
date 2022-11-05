import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Offer from "./pages/Offer/Offer";
import Publish from "./pages/Publish/Publish";
import Payment from "./pages/Payment/Payment";

import "./App.scss";

library.add(faMagnifyingGlass, faPlus);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&sort=${
          !sort ? "price-desc" : "price-asc"
        }`
      );
      setData(response.data);
      setIsLoading(false);
      // console.log(response.data);
    };
    fetchData();
  }, [search, sort]);

  return (
    <Router>
      <Header
        handleToken={handleToken}
        userToken={userToken}
        setSearch={setSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              isLoading={isLoading}
              setSort={setSort}
              sort={sort}
            />
          }
        />
        <Route path="/signup" element={<SignUp handleToken={handleToken} />} />
        <Route path="/signin" element={<SignIn handleToken={handleToken} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/publish" element={<Publish userToken={userToken} />} />
        <Route path="/payment" element={<Payment userToken={userToken} />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//Pages
import LogIn from "./Pages/LogIn";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import PrivateRoute from "./PrivateRoute";
import HomePage from "./Pages/HomePage";
import MyAccount from "./Pages/MyAccount";
//
import { Route, Switch, Redirect } from "react-router-dom";
import { SIGN_IN, SIGN_OUT } from "./Redux/Actions";
import Dropdown from "./Components/Dropdown";

function App() {
  const data = [
    {
      value: "russia",
      label: "Russia",
      children: [
        {
          value: "moscow",
          label: "Moscow",
          children: [
            {
              value: "central administrative okrug",
              label: "Central Administrative Okrug",
            },
          ],
        },
        {
          value: "saint petersburg",
          label: "Saint Petersburg",
        },
      ],
    },
    {
      value: "armenia",
      label: "Armenia",
      children: [
        {
          value: "yerevan",
          label: "Yerevan",
          children: [
            {
              value: "davtashen",
              label: "Davtashen",
            },
            {
              value: "komitas",
              label: "Komitas",
            },
            {
              value: "alaverdyan",
              label: "Alaverdyan",
              children: [
                {
                  value: "tpagrichner",
                  label: "Tpagrichner",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "georgia",
      label: "Georgia",
      children: [
        {
          value: "tbilisi",
          label: "Tbilisi",
        },
      ],
    },
    {
      value: "mozambik",
      label: "Mozambik",
    },
  ];
  const data_2 = [
    {
      value: "volkswagen",
      label: "Volkswagen",
      children: [
        {
          value: "passat",
          label: "Passat",
          children: [
            {
              value: "2.0 fsi turbo",
              label: "2.0 FSI TURBO",
            },
          ],
        },
        {
          value: "golf",
          label: "Golf",
        },
      ],
    },
    {
      value: "mercedes_benz",
      label: "Mercedes_Benz",
      children: [
        {
          value: "c300",
          label: "C300",
          children: [
            {
              value: "white",
              label: "white",
            },
            {
              value: "black",
              label: "Black",
            },
            {
              value: "amg",
              label: "AMG",
              children: [
                {
                  value: "full",
                  label: "Full",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "bmw",
      label: "BMW",
      children: [
        {
          value: "530i",
          label: "530i",
        },
      ],
    },
    {
      value: "dorjar",
      label: "DORJAR",
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = window.localStorage.getItem("loggedIn");
    if (auth === "true") {
      dispatch(SIGN_IN());
    } else {
      dispatch(SIGN_OUT());
    }
  });
  const handleSelectedValue = (value, indexes) => {
    console.log("app value", value);
    console.log("app index", indexes);
  };
  return (
    <div style={{ backgroundColor: "rgb(54, 77, 121)" }}>
      <Navbar />
      <Switch>
        <Route path="/home" component={HomePage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/account" component={MyAccount} exact />
        <PrivateRoute component={LogIn} path="/login" />
        <Redirect to="/login" />
      </Switch>
      <Dropdown data={data} onChange={handleSelectedValue} />
      <Dropdown data={data_2} onChange={handleSelectedValue} />
    </div>
  );
}

export default App;

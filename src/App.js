import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SignInAndSignUpPage from "./pages/SignInAndSignUp/index";
import Header from "./components/Header/index";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      console.log(user);
      return () => unsubscribeFromAuth();
    });
  }, [currentUser]);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;

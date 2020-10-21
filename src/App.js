import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SignInAndSignUpPage from "./pages/SignInAndSignUp/index";
import Header from "./components/Header/index";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userAction";

function App({ setCurrentUser }) {
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }

      return () => unsubscribeFromAuth();
    });
  }, [setCurrentUser]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);

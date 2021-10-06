import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Forum from "./Pages/Forum/Forum";
import QuestionList from "./Pages/Profile/QuestionList";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./Firebase/firebase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./Store/userSlice";
import { CircularProgress } from "@mui/material";
import EditQuestion from "./Pages/Profile/EditQuestion";
import PublicRoute from "./Components/PrivateRoute/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Blog from "./Pages/Blog/Blog";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
    const unsubs = onAuthStateChanged(
      auth,
      (userAuth) => {
        console.log("userAuth = ", userAuth);
        if (userAuth !== null) {
          console.log("masuk if");
          dispatch(
            login({
              username: userAuth.displayName,
              uid: userAuth.uid,
              profilePictureUrl: userAuth.photoURL,
              point: null,
            })
          );
          setLoading(false);
        } else {
          dispatch(logout());
          setLoading(false);
        }
      },
      (error) => {
        alert(error);
        setLoading(false);
      }
    );
    return unsubs;
  }, [dispatch]);

  return (
    <div>
      {loading && (
        <div className="spinner-contain">
          <CircularProgress
            style={{ width: "200px", height: "200px", color: "#333533" }}
          />
        </div>
      )}
      {!loading && (
        <>
          <Header />
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/forum" component={Forum} />
            <PrivateRoute path="/user-question" Component={QuestionList} />
            <PublicRoute path="/login" Component={Login} />
            <PublicRoute path="/register" Component={Register} />
            <PrivateRoute
              path="/edit-question/:questionId"
              Component={EditQuestion}
            />
            <Route path="/blog" component={Blog} />
          </Switch>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

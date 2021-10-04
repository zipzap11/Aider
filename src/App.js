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
import { login } from "./Store/userSlice";
import { CircularProgress } from "@mui/material";
import { useGetUserPoint } from "./Hooks/useGetUserPoint";

function App() {
  const [loading, setLoading] = useState(true);
  const [userAuth, setUserAuth] = useState(null);
  const { getUserPoint, userData, errorGetUserPoint, loadingGetUserPoint } =
    useGetUserPoint();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
    onAuthStateChanged(
      auth,
      (userAuth) => {
        console.log(userAuth);
        if (userAuth !== null) {
          getUserPoint({
            variables: {
              uid: userAuth.uid,
            },
          });
          setUserAuth(userAuth);
        } else {
          setLoading(false);
        }
      },
      (error) => {
        alert(error);
        setLoading(false);
      }
    );
  }, [dispatch, getUserPoint]);

  useEffect(() => {
    if (userAuth && !loadingGetUserPoint && userData) {
      console.log("point", userData.user_by_pk.point);
      dispatch(
        login({
          username: userAuth.displayName,
          uid: userAuth.uid,
          profilePictureUrl: userAuth.photoURL,
          point: userData.user_by_pk.point,
        })
      );
      setLoading(false);
    }
  }, [userAuth, loadingGetUserPoint, userData, dispatch]);

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
            <Route path="/profile" component={QuestionList} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

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

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;

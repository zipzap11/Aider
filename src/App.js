import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Forum from "./Pages/Forum/Forum";
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/forum" component={Forum} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllServices from "./Pages/AllServices/AllServices";
import "./App.css";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Departments from "./Pages/Departments/Departments";
import Consultants from "./Pages/Consultants/Consultants";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <AllServices></AllServices>
          </Route>
          <Route path="/departments">
            <Departments></Departments>
          </Route>
          <Route path="/consultants">
            <Consultants></Consultants>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route></Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

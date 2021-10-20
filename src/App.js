import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllServices from "./Pages/AllServices/AllServices";
import "./App.css";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
// import Register from "./Pages/Register/Register";
import Departments from "./Pages/Departments/Departments";
import Consultants from "./Pages/Consultants/Consultants";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Booking from "./Pages/Booking/Booking";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <AllServices></AllServices>
            </PrivateRoute>
            <Route path="/departments">
              <Departments></Departments>
            </Route>
            <PrivateRoute path="/consultants">
              <Consultants></Consultants>
            </PrivateRoute>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/booking/:bookId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route></Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

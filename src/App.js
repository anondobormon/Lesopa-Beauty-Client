import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Notfound from './Component/Notfound/Notfound';

import Team from './Component/Home/Team/Team';
import Admin from './Component/Admin/Admin/Admin';
import AddService from './Component/Admin/Admin/AddService';
import UserDashboard from './Component/UserDashboard/UserDashboard/UserDashboard';
import UserBooking from './Component/UserDashboard/UserDashboard/UserBooking';
import BookingList from './Component/UserDashboard/UserDashboard/BookingList';
import Reviews from './Component/Home/Reviews/Reviews';
import Review from './Component/UserDashboard/UserDashboard/Review';
import Login from './Component/Home/Login/Login';
import PrivetRoute from './Component/Home/Login/PrivetRoute';
import OrderList from './Component/Admin/Admin/OrderList';
import Navbar from './Component/Home/Navbar/Navbar'


export const UserContext = createContext({})

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>  

          <PrivetRoute path='/admin/makeAdmin'>
            <Admin></Admin>
          </PrivetRoute>

          <Route path='/admin/addService'>
            <AddService></AddService>
          </Route>

          <Route path='/admin/orderList'>
            <OrderList></OrderList>
          </Route>





          <PrivetRoute path='/user/dashboard'>
            <UserDashboard></UserDashboard>
          </PrivetRoute>

          <PrivetRoute path='/userBooking'>
            <UserBooking></UserBooking>
          </PrivetRoute>

          <Route path='/userBookingList'>
            <BookingList></BookingList>
          </Route>

          <Route path='/userReview'>
            <Review></Review>
          </Route>

          <Route path='*'>
            <Notfound></Notfound>
          </Route>


        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

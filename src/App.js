import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import SingleItem from './Pages/Items/SingleItem';
import Order from './Pages/Order/Order';
import Navigation from './Pages/Navigation/Navigation';
import Footer from './Pages/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import Review from './Pages/Dashboard/Review/Review';
import Admin from './Pages/Dashboard/Admin/Admin';
import AllOrders from './Pages/Dashboard/AllOrders/AllOrders';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import DashHome from './Pages/Dashboard/DashHome/DashHome';
import All from './Pages/Items/All';


function App() {
  return (
    <AuthProvider>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/allitems" element={<All />} />
        <Route path="/items/:id" element={<PrivateRoute><SingleItem /></PrivateRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<PrivateRoute><Order /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
            <Route exact path='/dashboard' element={<DashHome></DashHome>}></Route>
        <Route path="review" element={<Review />}></Route>
          <Route path={`/dashboard/myorder`} element={<MyOrders />}></Route>
          <Route path={`/dashboard/admin`} element={<Admin />}></Route>
          <Route path={`/dashboard/allorders`} element={<AllOrders />}></Route>
      </Route>
      </Routes>
      <Footer />
    </AuthProvider>
  );
}


export default App;


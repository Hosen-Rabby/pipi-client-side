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


function App() {
  return (
    <AuthProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<PrivateRoute><SingleItem /></PrivateRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<PrivateRoute><Order /></PrivateRoute>} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}


export default App;


/*
hooks folder
  useFirebase
  useAuth
*/


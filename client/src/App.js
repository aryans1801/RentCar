import "./App.css";
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";
import UserBookings from "./pages/UserBookings";
import AddCar from "./pages/AddCar";
import AdminHome from "./pages/AdminHome";
import EditCar from "./pages/EditCar";

export const URL = "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" exact element={<Home />} /> */}
          {/* <ProtectedRoute path="/" exact element={<Home />} /> */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/booking/:carid" exact element={<BookingCar />} />
            <Route path="/userbookings" exact element={<UserBookings />} />
            <Route path="/addcar" exact element={<AddCar />} />
            <Route path="/editcar/:carid" exact element={<EditCar />} />
            <Route path="/admin" exact element={<AdminHome />} />
          </Route>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  let navigate = useNavigate();
  if (localStorage.getItem("user")) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

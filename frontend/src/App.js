import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  // Redirect,
} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// import AdminDashboard from "./pages/AdminDashboard.js";
// import LoginPage from "./pages/Login";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
  const { user } = useAuthContext();
  // const isAdminUser = true;
  // const navigate = useNavigate();


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            {/* <Route
              exact
              path="/dashboard"
              render={() =>
                isAdminUser ? <AdminDashboard /> : <Redirect to="/login" />
              } */}
            {/* /> */}
            {/* <Route exact path="/login" component={LoginPage} /> */}
            {/* <Route
  exact
  path="/dashboard"
  element={isAdminUser ? <AdminDashboard /> : () => navigate("/login")}
/> */}
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

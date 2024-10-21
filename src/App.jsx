import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import NotFound from "./Pages/NotFound/NotFound";
import LoginPage from "./components/LoginForm/LoginForm";
import RegistrationPage from "./components/RegistrationForm/RegistrationForm.jsx";
import { refreshUser } from "./redux/auth/operations.js";
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import { PrivateRoute } from "./components/privateRoute.jsx";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="App">
      <Suspense fallback={<h2>Loading components...</h2>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

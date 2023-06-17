import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { Layout } from "../../pages/Layout";
// import { HomePage } from "../../pages/HomePage/HomePage";
import { AuthRoutes } from "../utils/authRoutes";
import { useDispatch } from 'react-redux';
import { useAuth } from 'components/hooks/useAuth';
import { refreshUser } from 'components/Redux/Auth/operations';
import { Tasks } from "../Tasks/Tasks";
import { RestrictedRoute } from 'components/RestrictedRoute';

const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import("pages/Login"));

export const App = () => {

const dispatch = useDispatch();
const { isRefreshing } = useAuth();
console.log("isRefreshing", isRefreshing)

useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route index element={<HomePage />} /> */}
         <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/tasks"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={<AuthRoutes component={LoginPage} redirectTo="/" />}
        />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </>
  );
};
